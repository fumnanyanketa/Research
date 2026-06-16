import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { HabitToday } from '../lib/types';
import { colors } from '../theme';

interface Props {
  habit: HabitToday;
  onToggle: (done: boolean) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  showStreak?: boolean;
}

export function HabitRow({ habit, onToggle, onEdit, onDelete, showStreak }: Props) {
  const done = habit.today?.done ?? false;
  return (
    <View style={styles.wrap}>
      <Pressable style={styles.row} onPress={() => onToggle(!done)}>
        <View style={[styles.box, done && styles.boxOn]}>{done ? <Text style={styles.check}>✓</Text> : null}</View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.label, done && styles.labelDone]}>{habit.label}</Text>
          {habit.cue ? <Text style={styles.cue}>{habit.cue}</Text> : null}
        </View>
        {showStreak ? (
          <Text style={styles.streak}>
            {habit.week_done}
            <Text style={styles.streakMuted}>/7</Text>
          </Text>
        ) : null}
      </Pressable>
      {onEdit || onDelete ? (
        <View style={styles.actions}>
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
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingVertical: 4 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 8 },
  box: {
    width: 24,
    height: 24,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: colors.border2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxOn: { backgroundColor: colors.accent, borderColor: colors.accent },
  check: { color: colors.accentInk, fontWeight: '800', fontSize: 13 },
  label: { fontSize: 14.5, color: colors.text },
  labelDone: { color: colors.muted, textDecorationLine: 'line-through' },
  cue: { fontSize: 11.5, color: colors.muted2, marginTop: 2 },
  streak: { fontSize: 12.5, fontWeight: '700', color: colors.accentText },
  streakMuted: { color: colors.muted2 },
  actions: { flexDirection: 'row', gap: 14, paddingLeft: 36, paddingBottom: 6 },
  link: { color: colors.muted, fontWeight: '600', fontSize: 12 },
});
