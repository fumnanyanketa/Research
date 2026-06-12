import { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { requestRecordingPermissionsAsync } from 'expo-audio';
import type { RealtimeTranscriber } from 'whisper.rn/realtime-transcription';
import { collectTranscript, createTranscriber } from './src/lib/whisper';
import { supabase } from './src/lib/supabase';
import type { ProcessResult, Task } from './src/lib/types';

type Phase = 'idle' | 'preparing' | 'recording' | 'processing' | 'review';

export default function App() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [transcript, setTranscript] = useState('');
  const [summary, setSummary] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const transcriberRef = useRef<RealtimeTranscriber | null>(null);
  // Realtime transcription emits one rolling result per audio slice; keep them
  // keyed by slice index so the live transcript assembles in order.
  const slicesRef = useRef<Record<number, string>>({});

  const startRecording = useCallback(async () => {
    const { granted } = await requestRecordingPermissionsAsync();
    if (!granted) {
      Alert.alert('Microphone access is required to record.');
      return;
    }
    setPhase('preparing');
    try {
      slicesRef.current = {};
      setTranscript('');
      setSummary('');
      setTasks([]);

      // Downloads the Whisper model on first run (~60 MB), then it's offline.
      const transcriber = await createTranscriber(
        (event) => {
          if (event.data?.result !== undefined) {
            slicesRef.current[event.sliceIndex] = event.data.result;
            setTranscript(assembleTranscript(slicesRef.current));
          }
        },
        (error) => Alert.alert('Transcription error', error),
      );
      transcriberRef.current = transcriber;
      await transcriber.start();
      setPhase('recording');
    } catch (err) {
      Alert.alert('Could not start recording', String(err));
      setPhase('idle');
    }
  }, []);

  const stopRecording = useCallback(async () => {
    setPhase('processing');
    try {
      const transcriber = transcriberRef.current;
      transcriberRef.current = null;
      if (!transcriber) {
        setPhase('idle');
        return;
      }
      await transcriber.stop();
      const fullTranscript =
        collectTranscript(transcriber) || assembleTranscript(slicesRef.current);
      await transcriber.release();
      setTranscript(fullTranscript);
      if (!fullTranscript) {
        Alert.alert('Nothing was transcribed.');
        setPhase('idle');
        return;
      }

      const { data: entry, error } = await supabase
        .from('entries')
        .insert({ transcript: fullTranscript, kind: 'conversation' })
        .select()
        .single();
      if (error) throw error;

      const { data, error: fnError } = await supabase.functions.invoke<ProcessResult>(
        'process-entry',
        { body: { entry_id: entry.id } },
      );
      if (fnError) throw fnError;

      setSummary(data?.summary ?? '');
      setTasks(data?.tasks ?? []);
      setPhase('review');
    } catch (err) {
      Alert.alert('Processing failed', String(err));
      setPhase('idle');
    }
  }, []);

  const resolveTask = useCallback(async (task: Task, status: 'confirmed' | 'dismissed') => {
    setTasks((current) => current.map((t) => (t.id === task.id ? { ...t, status } : t)));
    const { error } = await supabase.from('tasks').update({ status }).eq('id', task.id);
    if (error) Alert.alert('Could not save task', error.message);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Life OS</Text>

      {phase === 'review' ? (
        <ScrollView style={styles.review}>
          <Text style={styles.heading}>Summary</Text>
          <Text style={styles.body}>{summary}</Text>
          <Text style={styles.heading}>Action items</Text>
          {tasks.length === 0 && <Text style={styles.body}>None found.</Text>}
          {tasks.map((task) => (
            <View key={task.id} style={styles.taskCard}>
              <Text style={styles.body}>{task.what}</Text>
              <Text style={styles.meta}>
                {task.owner === 'me' ? 'You owe' : 'Owed to you'}
                {task.person ? ` · ${task.person}` : ''}
                {task.due_date ? ` · due ${task.due_date}` : ''}
              </Text>
              {task.status === 'proposed' ? (
                <View style={styles.row}>
                  <Pressable style={styles.confirm} onPress={() => resolveTask(task, 'confirmed')}>
                    <Text style={styles.buttonText}>Confirm</Text>
                  </Pressable>
                  <Pressable style={styles.dismiss} onPress={() => resolveTask(task, 'dismissed')}>
                    <Text style={styles.buttonText}>Dismiss</Text>
                  </Pressable>
                </View>
              ) : (
                <Text style={styles.meta}>{task.status}</Text>
              )}
            </View>
          ))}
          <Pressable style={styles.done} onPress={() => setPhase('idle')}>
            <Text style={styles.buttonText}>Done</Text>
          </Pressable>
        </ScrollView>
      ) : (
        <>
          <View style={styles.center}>
            {phase === 'preparing' || phase === 'processing' ? (
              <>
                <ActivityIndicator size="large" />
                <Text style={styles.meta}>
                  {phase === 'preparing'
                    ? 'Loading transcription model…'
                    : 'Analyzing your conversation…'}
                </Text>
              </>
            ) : (
              <Pressable
                style={[styles.recordButton, phase === 'recording' && styles.recording]}
                onPress={phase === 'recording' ? stopRecording : startRecording}
              >
                <Text style={styles.recordLabel}>
                  {phase === 'recording' ? 'Stop' : 'Record'}
                </Text>
              </Pressable>
            )}
          </View>
          <ScrollView style={styles.transcript}>
            <Text style={styles.body}>{transcript}</Text>
          </ScrollView>
        </>
      )}
    </View>
  );
}

function assembleTranscript(slices: Record<number, string>): string {
  return Object.keys(slices)
    .map(Number)
    .sort((a, b) => a - b)
    .map((i) => slices[i])
    .join(' ')
    .trim();
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 72, paddingHorizontal: 24 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 16 },
  center: { alignItems: 'center', justifyContent: 'center', height: 260, gap: 12 },
  recordButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recording: { backgroundColor: '#d62828' },
  recordLabel: { color: '#fff', fontSize: 24, fontWeight: '600' },
  transcript: { flex: 1, marginTop: 8 },
  review: { flex: 1 },
  heading: { fontSize: 18, fontWeight: '600', marginTop: 16, marginBottom: 4 },
  body: { fontSize: 16, lineHeight: 22 },
  meta: { fontSize: 13, color: '#666', marginTop: 4 },
  taskCard: {
    borderWidth: 1,
    borderColor: '#e5e5ea',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  row: { flexDirection: 'row', gap: 8, marginTop: 8 },
  confirm: { backgroundColor: '#2a9d8f', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16 },
  dismiss: { backgroundColor: '#8d99ae', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16 },
  done: { backgroundColor: '#1c1c1e', borderRadius: 8, padding: 12, alignItems: 'center', marginVertical: 24 },
  buttonText: { color: '#fff', fontWeight: '600' },
});
