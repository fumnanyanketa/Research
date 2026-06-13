import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { HabitToday } from '../lib/types';

interface Props {
  habit: HabitToday;
  onToggle: (done: boolean) => void;
  showStreak?: boolean;
}

export function HabitRow({ habit, onToggle, showStreak }: Props) {
  const done = habit.today?.done ?? false;
  return (
    <Pressable style={styles.row} onPress={() => onToggle(!done)}>
      <View style={[styles.box, done && styles.boxOn]}>{done && <Text style={styles.check}>✓</Text>}</View>
      <View style={styles.textWrap}>
        <Text style={[styles.label, done && styles.labelDone]}>{habit.label}</Text>
        <Text style={styles.sub}>
          {habit.target_minutes ? `${habit.target_minutes} min` : 'daily'}
          {showStreak ? ` · ${habit.week_done}/7 this week` : ''}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, gap: 12 },
  box: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxOn: { backgroundColor: '#2a9d8f', borderColor: '#2a9d8f' },
  check: { color: '#fff', fontWeight: '700' },
  textWrap: { flex: 1 },
  label: { fontSize: 16 },
  labelDone: { color: '#999' },
  sub: { fontSize: 12, color: '#888', marginTop: 2 },
});
