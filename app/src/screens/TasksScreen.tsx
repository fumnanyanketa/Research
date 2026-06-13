import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getAreas, getTasks, updateTask } from '../lib/db';
import type { Area, Task } from '../lib/types';
import { TaskCard } from '../components/TaskCard';

export function TasksScreen({ refreshKey, onChanged }: { refreshKey: number; onChanged: () => void }) {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [areas, setAreas] = useState<Record<string, string>>({});

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [taskList, areaList] = await Promise.all([getTasks(), getAreas()]);
      setTasks(taskList);
      setAreas(Object.fromEntries(areaList.map((a: Area) => [a.id, a.label] as [string, string])));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load, refreshKey]);

  const patch = async (task: Task, p: Partial<Task>) => {
    await updateTask(task.id, p);
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

  const proposed = tasks.filter((t) => t.status === 'proposed');
  const active = tasks.filter((t) => t.status === 'confirmed');
  const done = tasks.filter((t) => t.status === 'done');
  const label = (t: Task) => (t.area_id ? areas[t.area_id] : undefined);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Tasks</Text>

      {proposed.length > 0 && <Text style={styles.h2}>Proposed by AI · review</Text>}
      {proposed.map((t) => (
        <TaskCard key={t.id} task={t} areaLabel={label(t)} onResolve={(s) => patch(t, { status: s })} />
      ))}

      <Text style={styles.h2}>Active</Text>
      {active.length === 0 && <Text style={styles.empty}>Nothing active.</Text>}
      {active.map((t) => (
        <TaskCard
          key={t.id}
          task={t}
          areaLabel={label(t)}
          onToggleKey={() => patch(t, { is_key: !t.is_key })}
          onComplete={() => patch(t, { status: 'done' })}
        />
      ))}

      {done.length > 0 && <Text style={styles.h2}>Done</Text>}
      {done.map((t) => (
        <TaskCard key={t.id} task={t} areaLabel={label(t)} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 40 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  h1: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  h2: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 4 },
  empty: { color: '#888', marginTop: 6 },
});
