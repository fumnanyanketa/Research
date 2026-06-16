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
import { colors, radius } from '../theme';

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

      <View style={styles.seg}>
        <Pressable style={[styles.segBtn, mode === 'brain_dump' && styles.segOn]} onPress={() => setMode('brain_dump')}>
          <Text style={[styles.segText, mode === 'brain_dump' && styles.segTextOn]}>Quick thought</Text>
        </Pressable>
        <Pressable style={[styles.segBtn, mode === 'conversation' && styles.segOn]} onPress={() => setMode('conversation')}>
          <Text style={[styles.segText, mode === 'conversation' && styles.segTextOn]}>Conversation</Text>
        </Pressable>
      </View>

      {processing ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={colors.accentText} />
          <Text style={styles.muted}>Filing and extracting tasks…</Text>
        </View>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder={mode === 'brain_dump' ? "What's on your mind? Anchor will sort it." : 'Record a meeting — Anchor pulls out the tasks.'}
            placeholderTextColor={colors.muted2}
            value={typed}
            onChangeText={setTyped}
            multiline
          />
          {typed.trim().length > 0 && (
            <Pressable style={styles.fileBtn} onPress={() => fileEntry(mode, typed)}>
              <Text style={styles.fileText}>File it</Text>
            </Pressable>
          )}

          <View style={styles.recWrap}>
            {recorder.phase === 'preparing' ? (
              <>
                <ActivityIndicator size="large" color={colors.accentText} />
                <Text style={styles.muted}>Loading on-device model…</Text>
              </>
            ) : (
              <>
                <Pressable
                  style={[styles.record, recorder.phase === 'recording' && styles.recording]}
                  onPress={recorder.phase === 'recording' ? stopAndFile : recorder.start}
                >
                  <Text style={[styles.recordText, recorder.phase === 'recording' && styles.recordTextOn]}>
                    {recorder.phase === 'recording' ? '■' : '●'}
                  </Text>
                </Pressable>
                <Text style={[styles.recLabel, recorder.phase === 'recording' && { color: colors.accentText }]}>
                  {recorder.phase === 'recording' ? 'Recording · tap to stop' : 'Tap to record (offline)'}
                </Text>
              </>
            )}
          </View>

          {recorder.transcript.length > 0 && <Text style={styles.transcript}>{recorder.transcript}</Text>}
        </>
      )}

      {summary.length > 0 && (
        <>
          <Text style={styles.section}>SUMMARY</Text>
          <View style={styles.card}>
            <Text style={styles.body}>{summary}</Text>
          </View>
          {proposed.length > 0 && <Text style={styles.section}>PROPOSED TASKS</Text>}
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
  h1: { fontSize: 30, fontWeight: '800', color: colors.text, letterSpacing: -0.5, marginBottom: 14 },
  seg: { flexDirection: 'row', backgroundColor: colors.inset, borderWidth: 1, borderColor: colors.border, borderRadius: 999, padding: 4, marginBottom: 16 },
  segBtn: { flex: 1, paddingVertical: 9, borderRadius: 999, alignItems: 'center' },
  segOn: { backgroundColor: colors.accent },
  segText: { color: colors.muted, fontWeight: '600', fontSize: 13 },
  segTextOn: { color: colors.accentInk },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inset,
    borderRadius: radius.md,
    padding: 14,
    minHeight: 96,
    fontSize: 15,
    color: colors.text,
    textAlignVertical: 'top',
  },
  fileBtn: { backgroundColor: colors.accent, borderRadius: 999, paddingVertical: 13, alignItems: 'center', marginTop: 12 },
  fileText: { color: colors.accentInk, fontWeight: '700', fontSize: 15 },
  recWrap: { alignItems: 'center', gap: 12, marginVertical: 22 },
  record: { width: 84, height: 84, borderRadius: 42, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  recording: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border2 },
  recordText: { color: colors.accentInk, fontSize: 30, fontWeight: '700' },
  recordTextOn: { color: colors.red },
  recLabel: { color: colors.muted, fontWeight: '600', fontSize: 12.5 },
  center: { alignItems: 'center', justifyContent: 'center', gap: 10, paddingVertical: 30 },
  muted: { color: colors.muted },
  transcript: { fontSize: 15, lineHeight: 21, color: colors.text, marginTop: 8 },
  section: { fontSize: 11, fontWeight: '700', letterSpacing: 1.5, color: colors.muted, marginTop: 22, marginBottom: 8 },
  card: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: 14 },
  body: { fontSize: 15, lineHeight: 22, color: colors.text },
});
