import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Task } from '../lib/types';

const PRIORITY_COLOR: Record<string, string> = {
  high: '#d62828',
  medium: '#e9a200',
  low: '#8d99ae',
};

interface Props {
  task: Task;
  areaLabel?: string;
  onResolve?: (status: 'confirmed' | 'dismissed') => void;
  onToggleKey?: () => void;
  onComplete?: () => void;
}

export function TaskCard({ task, areaLabel, onResolve, onToggleKey, onComplete }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={[styles.dot, { backgroundColor: PRIORITY_COLOR[task.priority] ?? '#8d99ae' }]} />
        <Text style={[styles.what, task.status === 'done' && styles.struck]}>{task.what}</Text>
      </View>
      <Text style={styles.meta}>
        {task.owner === 'me' ? 'You owe' : 'Owed to you'}
        {task.person ? ` · ${task.person}` : ''}
        {task.due_date ? ` · due ${task.due_date}` : ''}
        {areaLabel ? ` · ${areaLabel}` : ''}
      </Text>

      {task.status === 'proposed' && onResolve && (
        <View style={styles.row}>
          <Pressable style={styles.confirm} onPress={() => onResolve('confirmed')}>
            <Text style={styles.btnText}>Confirm</Text>
          </Pressable>
          <Pressable style={styles.dismiss} onPress={() => onResolve('dismissed')}>
            <Text style={styles.btnText}>Dismiss</Text>
          </Pressable>
        </View>
      )}

      {task.status === 'confirmed' && (
        <View style={styles.row}>
          {onToggleKey && (
            <Pressable style={[styles.star, task.is_key && styles.starOn]} onPress={onToggleKey}>
              <Text style={styles.btnText}>{task.is_key ? '★ Key' : '☆ Key'}</Text>
            </Pressable>
          )}
          {onComplete && (
            <Pressable style={styles.complete} onPress={onComplete}>
              <Text style={styles.btnText}>Done</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: '#e5e5ea', borderRadius: 12, padding: 12, marginTop: 8 },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dot: { width: 10, height: 10, borderRadius: 5 },
  what: { fontSize: 16, flex: 1 },
  struck: { textDecorationLine: 'line-through', color: '#999' },
  meta: { fontSize: 13, color: '#666', marginTop: 6 },
  row: { flexDirection: 'row', gap: 8, marginTop: 10 },
  confirm: { backgroundColor: '#2a9d8f', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 14 },
  dismiss: { backgroundColor: '#8d99ae', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 14 },
  star: { backgroundColor: '#495057', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 14 },
  starOn: { backgroundColor: '#e9a200' },
  complete: { backgroundColor: '#1c1c1e', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 14 },
  btnText: { color: '#fff', fontWeight: '600' },
});
