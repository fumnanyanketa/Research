import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getAreas, getGoals, getHabitsToday, getTasks, toggleHabit, updateTask } from '../lib/db';
import type { Area, Goal, HabitToday, Task } from '../lib/types';
import { TaskCard } from '../components/TaskCard';
import { HabitRow } from '../components/HabitRow';

export function TodayScreen({ refreshKey, onChanged }: { refreshKey: number; onChanged: () => void }) {
  const [loading, setLoading] = useState(true);
  const [areas, setAreas] = useState<Record<string, string>>({});
  const [goals, setGoals] = useState<Goal[]>([]);
  const [habits, setHabits] = useState<HabitToday[]>([]);
  const [keyTasks, setKeyTasks] = useState<Task[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [areaList, goalList, habitList, tasks] = await Promise.all([
        getAreas(),
        getGoals(),
        getHabitsToday(),
        getTasks(),
      ]);
      setAreas(Object.fromEntries(areaList.map((a: Area) => [a.id, a.label] as [string, string])));
      setGoals(goalList);
      setHabits(habitList);
      setKeyTasks(tasks.filter((t) => t.status === 'confirmed' && t.is_key));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load, refreshKey]);

  const onToggleHabit = async (habit: HabitToday, done: boolean) => {
    await toggleHabit(habit, done);
    await load();
  };
  const completeTask = async (task: Task) => {
    await updateTask(task.id, { status: 'done' });
    await load();
    onChanged();
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const doneCount = habits.filter((h) => h.today?.done).length;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Today</Text>

      {goals.map((g) => {
        const days = g.target_date ? daysUntil(g.target_date) : null;
        return (
          <View key={g.id} style={styles.goalCard}>
            <Text style={styles.goalTitle}>{g.title}</Text>
            {days !== null && (
              <Text style={styles.goalDays}>
                {days} days to go · {g.target_date}
              </Text>
            )}
          </View>
        );
      })}

      <Text style={styles.h2}>Key tasks</Text>
      {keyTasks.length === 0 && (
        <Text style={styles.empty}>No starred tasks yet. Confirm tasks, then star 3–5 each morning.</Text>
      )}
      {keyTasks.map((t) => (
        <TaskCard
          key={t.id}
          task={t}
          areaLabel={t.area_id ? areas[t.area_id] : undefined}
          onComplete={() => completeTask(t)}
        />
      ))}

      <Text style={styles.h2}>
        Habits · {doneCount}/{habits.length}
      </Text>
      {habits.map((h) => (
        <HabitRow key={h.id} habit={h} onToggle={(done) => onToggleHabit(h, done)} />
      ))}
    </ScrollView>
  );
}

function daysUntil(date: string): number {
  const target = new Date(date + 'T00:00:00');
  const now = new Date();
  const ms = target.getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round(ms / 86400000);
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 40 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  h1: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  h2: { fontSize: 18, fontWeight: '600', marginTop: 22, marginBottom: 4 },
  goalCard: { backgroundColor: '#1c1c1e', borderRadius: 12, padding: 14, marginTop: 8 },
  goalTitle: { color: '#fff', fontSize: 15, fontWeight: '600' },
  goalDays: { color: '#e9a200', fontSize: 13, marginTop: 4 },
  empty: { color: '#888', marginTop: 6 },
});
