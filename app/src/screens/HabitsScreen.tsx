import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getHabitsToday, toggleHabit } from '../lib/db';
import type { HabitToday } from '../lib/types';
import { HabitRow } from '../components/HabitRow';

export function HabitsScreen({ refreshKey }: { refreshKey: number }) {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState<HabitToday[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setHabits(await getHabitsToday());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load, refreshKey]);

  const onToggle = async (habit: HabitToday, done: boolean) => {
    await toggleHabit(habit, done);
    await load();
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Habits</Text>
      {habits.map((h) => (
        <HabitRow key={h.id} habit={h} showStreak onToggle={(done) => onToggle(h, done)} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 40 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  h1: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
});
