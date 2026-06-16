import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Task } from '../lib/types';
import { colors, radius, PRIORITY_COLOR } from '../theme';

interface Props {
  task: Task;
  areaLabel?: string;
  onResolve?: (status: 'confirmed' | 'dismissed') => void;
  onToggleKey?: () => void;
  onComplete?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function TaskCard({ task, areaLabel, onResolve, onToggleKey, onComplete, onEdit, onDelete }: Props) {
  const done = task.status === 'done';
  const proposed = task.status === 'proposed';
  return (
    <View style={[styles.card, proposed && styles.proposed, done && styles.doneCard]}>
      <View style={styles.headRow}>
        <View style={[styles.dot, { backgroundColor: PRIORITY_COLOR[task.priority] ?? colors.grey }]} />
        <Text style={[styles.what, done && styles.struck]}>{task.what}</Text>
        {task.is_key && !done ? <Text style={styles.star}>★</Text> : null}
      </View>
      <Text style={styles.meta}>
        <Text style={{ color: task.owner === 'them' ? colors.accentText : colors.muted }}>
          {task.owner === 'them' ? 'owed to you' : 'owed by you'}
        </Text>
        {task.person ? ` · ${task.person}` : ''}
        {task.due_date ? ` · ${task.due_date}` : ''}
        {areaLabel ? ` · ${areaLabel}` : ''}
      </Text>

      {proposed && onResolve ? (
        <View style={styles.row}>
          <Pressable style={[styles.btn, styles.accent]} onPress={() => onResolve('confirmed')}>
            <Text style={styles.accentText}>Confirm</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.ghost]} onPress={() => onResolve('dismissed')}>
            <Text style={styles.ghostText}>Dismiss</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.row}>
          {!done && onComplete ? (
            <Pressable style={[styles.btn, styles.ghost]} onPress={onComplete}>
              <Text style={styles.ghostText}>Done</Text>
            </Pressable>
          ) : null}
          {!done && onToggleKey ? (
            <Pressable style={[styles.btn, styles.ghost]} onPress={onToggleKey}>
              <Text style={styles.ghostText}>{task.is_key ? 'Unstar' : 'Star'}</Text>
            </Pressable>
          ) : null}
          {onEdit ? (
            <Pressable onPress={onEdit}>
              <Text style={styles.link}>Edit</Text>
            </Pressable>
          ) : null}
          {onDelete ? (
            <Pressable onPress={onDelete}>
              <Text style={styles.link}>Delete</Text>
            </Pressable>
          ) : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: 14, marginTop: 10 },
  proposed: { borderColor: colors.accent },
  doneCard: { opacity: 0.6 },
  headRow: { flexDirection: 'row', alignItems: 'center', gap: 9 },
  dot: { width: 9, height: 9, borderRadius: 5 },
  what: { flex: 1, fontSize: 15, fontWeight: '500', color: colors.text },
  struck: { textDecorationLine: 'line-through', color: colors.muted2 },
  star: { color: colors.accentText, fontSize: 14 },
  meta: { fontSize: 12, color: colors.muted, marginTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 12 },
  btn: { borderRadius: 999, paddingVertical: 7, paddingHorizontal: 14 },
  accent: { backgroundColor: colors.accent },
  accentText: { color: colors.accentInk, fontWeight: '700', fontSize: 13 },
  ghost: { borderWidth: 1, borderColor: colors.border2 },
  ghostText: { color: colors.muted, fontWeight: '600', fontSize: 13 },
  link: { color: colors.muted, fontWeight: '600', fontSize: 12 },
});
