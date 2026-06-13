import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRecorder } from '../lib/useRecorder';
import { createEntry, processEntry, updateTask } from '../lib/db';
import type { EntryKind, Task } from '../lib/types';
import { TaskCard } from '../components/TaskCard';

type Mode = 'brain_dump' | 'conversation';

export function CaptureScreen({ onChanged }: { onChanged: () => void }) {
  const [mode, setMode] = useState<Mode>('brain_dump');
  const [typed, setTyped] = useState('');
  const [processing, setProcessing] = useState(false);
  const [summary, setSummary] = useState('');
  const [proposed, setProposed] = useState<Task[]>([]);
  const recorder = useRecorder((msg) => Alert.alert('Recording error', msg));

  const fileEntry = async (kind: EntryKind, transcript: string) => {
    if (!transcript.trim()) {
      Alert.alert('Nothing to save yet.');
      return;
    }
    setProcessing(true);
    setSummary('');
    setProposed([]);
    try {
      const id = await createEntry(kind, transcript.trim());
      const result = await processEntry(id);
      setSummary(result.summary);
      setProposed(result.tasks);
      setTyped('');
      onChanged();
    } catch (err) {
      Alert.alert('Processing failed', String(err));
    } finally {
      setProcessing(false);
    }
  };

  const stopAndFile = async () => {
    const transcript = await recorder.stop();
    await fileEntry(mode, transcript);
  };

  const resolve = async (task: Task, status: 'confirmed' | 'dismissed') => {
    setProposed((cur) => cur.map((t) => (t.id === task.id ? { ...t, status } : t)));
    try {
      await updateTask(task.id, { status });
      onChanged();
    } catch (err) {
      Alert.alert('Could not save', String(err));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.h1}>Capture</Text>

      <View style={styles.modeRow}>
        <Pressable
          style={[styles.modeBtn, mode === 'brain_dump' && styles.modeOn]}
          onPress={() => setMode('brain_dump')}
        >
          <Text style={[styles.modeText, mode === 'brain_dump' && styles.modeTextOn]}>Quick thought</Text>
        </Pressable>
        <Pressable
          style={[styles.modeBtn, mode === 'conversation' && styles.modeOn]}
          onPress={() => setMode('conversation')}
        >
          <Text style={[styles.modeText, mode === 'conversation' && styles.modeTextOn]}>Conversation</Text>
        </Pressable>
      </View>

      {processing ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
          <Text style={styles.muted}>Filing and extracting tasks…</Text>
        </View>
      ) : (
        <>
          {mode === 'brain_dump' && recorder.phase === 'idle' && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Type a thought, task, or note…"
                value={typed}
                onChangeText={setTyped}
                multiline
              />
              {typed.trim().length > 0 && (
                <Pressable style={styles.saveBtn} onPress={() => fileEntry('brain_dump', typed)}>
                  <Text style={styles.saveText}>Save & file</Text>
                </Pressable>
              )}
              <Text style={styles.or}>— or speak it —</Text>
            </>
          )}

          <View style={styles.center}>
            {recorder.phase === 'preparing' ? (
              <>
                <ActivityIndicator size="large" />
                <Text style={styles.muted}>Loading transcription model…</Text>
              </>
            ) : (
              <Pressable
                style={[styles.record, recorder.phase === 'recording' && styles.recording]}
                onPress={recorder.phase === 'recording' ? stopAndFile : recorder.start}
              >
                <Text style={styles.recordText}>{recorder.phase === 'recording' ? 'Stop' : 'Record'}</Text>
              </Pressable>
            )}
          </View>

          {recorder.transcript.length > 0 && <Text style={styles.transcript}>{recorder.transcript}</Text>}
        </>
      )}

      {summary.length > 0 && (
        <>
          <Text style={styles.h2}>Summary</Text>
          <Text style={styles.body}>{summary}</Text>
          {proposed.length > 0 && <Text style={styles.h2}>Proposed tasks</Text>}
          {proposed.map((t) => (
            <TaskCard key={t.id} task={t} onResolve={(s) => resolve(t, s)} />
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 60 },
  h1: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  h2: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 4 },
  body: { fontSize: 16, lineHeight: 22 },
  modeRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  modeBtn: { borderWidth: 1, borderColor: '#1c1c1e', borderRadius: 20, paddingVertical: 6, paddingHorizontal: 16 },
  modeOn: { backgroundColor: '#1c1c1e' },
  modeText: { color: '#1c1c1e', fontWeight: '600' },
  modeTextOn: { color: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#e5e5ea',
    borderRadius: 12,
    padding: 12,
    minHeight: 90,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  saveBtn: { backgroundColor: '#2a9d8f', borderRadius: 8, padding: 12, alignItems: 'center', marginTop: 10 },
  saveText: { color: '#fff', fontWeight: '600' },
  or: { textAlign: 'center', color: '#aaa', marginVertical: 14 },
  center: { alignItems: 'center', justifyContent: 'center', gap: 10, paddingVertical: 12 },
  record: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recording: { backgroundColor: '#d62828' },
  recordText: { color: '#fff', fontSize: 22, fontWeight: '600' },
  transcript: { fontSize: 15, lineHeight: 21, color: '#333', marginTop: 12 },
  muted: { color: '#888' },
});
