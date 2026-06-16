import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { addHabit, deleteHabit, getHabitsToday, toggleHabit, updateHabit } from '../lib/db';
import type { HabitToday } from '../lib/types';
import { HabitRow } from '../components/HabitRow';
import { EditModal, EditModalConfig } from '../components/EditModal';
import { colors, radius } from '../theme';

export function HabitsScreen({ refreshKey }: { refreshKey: number }) {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState<HabitToday[]>([]);
  const [modal, setModal] = useState<EditModalConfig | null>(null);

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

  const onToggle = async (h: HabitToday, done: boolean) => {
    await toggleHabit(h, done);
    await load();
  };
  const add = () =>
    setModal({
      title: 'New habit',
      label: "e.g. 'Meditate · 10 min'",
      onSubmit: async (v) => {
        if (v.trim()) {
          await addHabit(v.trim(), null);
          await load();
        }
      },
    });
  const rename = (h: HabitToday) =>
    setModal({
      title: 'Edit habit',
      initial: h.label,
      onSubmit: async (v) => {
        if (v.trim()) {
          await updateHabit(h.id, { label: v.trim() });
          await load();
        }
      },
    });
  const remove = (h: HabitToday) =>
    Alert.alert('Delete habit?', h.label, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteHabit(h.id);
          await load();
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

  const doneCount = habits.filter((h) => h.today?.done).length;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Habits</Text>
      <Text style={styles.sub}>
        {doneCount === habits.length && habits.length > 0
          ? 'All anchors held. Good day.'
          : `${habits.length - doneCount} to go before you close the day.`}
      </Text>
      <View style={styles.card}>
        {habits.map((h) => (
          <HabitRow
            key={h.id}
            habit={h}
            showStreak
            onToggle={(done) => onToggle(h, done)}
            onEdit={() => rename(h)}
            onDelete={() => remove(h)}
          />
        ))}
      </View>
      <Pressable style={styles.addBtn} onPress={add}>
        <Text style={styles.addText}>＋ Add habit</Text>
      </Pressable>
      <EditModal config={modal} onClose={() => setModal(null)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 48 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface },
  h1: { fontSize: 30, fontWeight: '800', color: colors.text, letterSpacing: -0.5 },
  sub: { color: colors.muted, fontSize: 13.5, marginTop: 4, marginBottom: 14 },
  card: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radius.card, padding: 12 },
  addBtn: { borderWidth: 1, borderColor: colors.border2, borderRadius: 999, paddingVertical: 12, alignItems: 'center', marginTop: 14 },
  addText: { color: colors.muted, fontWeight: '600' },
});
