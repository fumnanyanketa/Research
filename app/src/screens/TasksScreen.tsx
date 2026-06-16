import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { deleteTask, getAreas, getTasks, updateTask } from '../lib/db';
import type { Area, Task, TaskStatus } from '../lib/types';
import { TaskCard } from '../components/TaskCard';
import { EditModal, EditModalConfig } from '../components/EditModal';
import { colors } from '../theme';

const GROUPS: { key: TaskStatus; label: string }[] = [
  { key: 'proposed', label: 'PROPOSED BY AI' },
  { key: 'confirmed', label: 'ACTIVE' },
  { key: 'done', label: 'DONE' },
];

export function TasksScreen({ refreshKey, onChanged }: { refreshKey: number; onChanged: () => void }) {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [areas, setAreas] = useState<Record<string, string>>({});
  const [modal, setModal] = useState<EditModalConfig | null>(null);

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

  const patch = async (t: Task, p: Partial<Task>) => {
    await updateTask(t.id, p);
    await load();
    onChanged();
  };
  const rename = (t: Task) =>
    setModal({
      title: 'Edit task',
      initial: t.what,
      onSubmit: async (v) => {
        if (v.trim()) await patch(t, { what: v.trim() });
      },
    });
  const remove = (t: Task) =>
    Alert.alert('Delete task?', t.what, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteTask(t.id);
          await load();
          onChanged();
        },
      },
    ]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.accentText} />
      </View>
    );
  }

  const label = (t: Task) => (t.area_id ? areas[t.area_id] : undefined);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Tasks</Text>
      {GROUPS.map((g) => {
        const items = tasks.filter((t) => t.status === g.key);
        if (items.length === 0) return null;
        return (
          <View key={g.key}>
            <Text style={[styles.section, g.key === 'proposed' && { color: colors.accentText }]}>{g.label}</Text>
            {items.map((t) =>
              g.key === 'proposed' ? (
                <TaskCard key={t.id} task={t} areaLabel={label(t)} onResolve={(s) => patch(t, { status: s })} />
              ) : (
                <TaskCard
                  key={t.id}
                  task={t}
                  areaLabel={label(t)}
                  onComplete={g.key === 'confirmed' ? () => patch(t, { status: 'done' }) : undefined}
                  onToggleKey={g.key === 'confirmed' ? () => patch(t, { is_key: !t.is_key }) : undefined}
                  onEdit={() => rename(t)}
                  onDelete={() => remove(t)}
                />
              ),
            )}
          </View>
        );
      })}
      <EditModal config={modal} onClose={() => setModal(null)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 48 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface },
  h1: { fontSize: 30, fontWeight: '800', color: colors.text, letterSpacing: -0.5, marginBottom: 4 },
  section: { fontSize: 11, fontWeight: '700', letterSpacing: 1.5, color: colors.muted, marginTop: 22, marginBottom: 4 },
});
