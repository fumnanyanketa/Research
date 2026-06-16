import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  addFinance,
  getAreas,
  getFinance,
  getGoals,
  getHabitsToday,
  getTasks,
  todayStr,
  toggleHabit,
  updateGoal,
  updateTask,
} from '../lib/db';
import type { Area, FinanceSlice, Goal, HabitToday, Task } from '../lib/types';
import { TaskCard } from '../components/TaskCard';
import { HabitRow } from '../components/HabitRow';
import { EditModal, EditModalConfig } from '../components/EditModal';
import { colors, radius } from '../theme';

function daysUntil(date: string): number {
  const target = new Date(date + 'T00:00:00');
  const now = new Date();
  return Math.round(
    (target.getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()) / 86400000,
  );
}

export function TodayScreen({ refreshKey, onChanged }: { refreshKey: number; onChanged: () => void }) {
  const [loading, setLoading] = useState(true);
  const [areas, setAreas] = useState<Record<string, string>>({});
  const [goals, setGoals] = useState<Goal[]>([]);
  const [habits, setHabits] = useState<HabitToday[]>([]);
  const [keyTasks, setKeyTasks] = useState<Task[]>([]);
  const [finance, setFinance] = useState<FinanceSlice[]>([]);
  const [finShown, setFinShown] = useState(false);
  const [modal, setModal] = useState<EditModalConfig | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [areaList, goalList, habitList, tasks, fin] = await Promise.all([
        getAreas(),
        getGoals(),
        getHabitsToday(),
        getTasks(),
        getFinance(),
      ]);
      setAreas(Object.fromEntries(areaList.map((a: Area) => [a.id, a.label] as [string, string])));
      setGoals(goalList);
      setHabits(habitList);
      setFinance(fin);
      setKeyTasks(tasks.filter((t) => t.status === 'confirmed' && t.is_key));
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    load();
  }, [load, refreshKey]);

  const onToggleHabit = async (h: HabitToday, done: boolean) => {
    await toggleHabit(h, done);
    await load();
  };
  const completeTask = async (t: Task) => {
    await updateTask(t.id, { status: 'done' });
    await load();
    onChanged();
  };
  const renameGoal = (g: Goal) =>
    setModal({
      title: 'Rename countdown',
      initial: g.title,
      onSubmit: async (v) => {
        if (v.trim()) {
          await updateGoal(g.id, { title: v.trim() });
          await load();
        }
      },
    });
  const editGoalDays = (g: Goal) =>
    setModal({
      title: 'Days left',
      numeric: true,
      initial: g.target_date ? String(Math.max(daysUntil(g.target_date), 0)) : '30',
      onSubmit: async (v) => {
        const n = parseInt(v, 10);
        if (Number.isFinite(n)) {
          await updateGoal(g.id, { target_date: todayStr(new Date(Date.now() + n * 86400000)) });
          await load();
        }
      },
    });
  const deleteGoal = (g: Goal) =>
    Alert.alert('Delete countdown?', g.title, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await updateGoal(g.id, { status: 'dropped' });
          await load();
        },
      },
    ]);
  const logFinance = () =>
    setModal({
      title: 'Log income',
      label: 'Format: source amount  (e.g. Photography 1500)',
      onSubmit: async (v) => {
        const m = v.trim().match(/^(.*?)\s+(\d+(?:\.\d+)?)$/);
        if (m) {
          await addFinance('income', m[1].trim(), parseFloat(m[2]));
          await load();
        } else {
          Alert.alert('Try the format: Photography 1500');
        }
      },
    });

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.accentText} />
      </View>
    );
  }

  const doneCount = habits.filter((h) => h.today?.done).length;
  const finTotal = finance.reduce((s, f) => s + f.value, 0);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Today</Text>

      <Text style={styles.section}>COUNTDOWNS</Text>
      {goals.length === 0 && <Text style={styles.empty}>No countdowns yet.</Text>}
      {goals.map((g) => {
        const d = g.target_date ? daysUntil(g.target_date) : null;
        return (
          <View key={g.id} style={styles.goalCard}>
            <Text style={styles.goalKicker}>DAYS TO GO</Text>
            {d !== null && <Text style={styles.goalNum}>{Math.max(d, 0)}</Text>}
            <Text style={styles.goalTitle}>{g.title}</Text>
            <View style={styles.goalActions}>
              <Pressable onPress={() => renameGoal(g)}>
                <Text style={styles.linkLight}>Rename</Text>
              </Pressable>
              <Pressable onPress={() => editGoalDays(g)}>
                <Text style={styles.linkLight}>Days</Text>
              </Pressable>
              <Pressable onPress={() => deleteGoal(g)}>
                <Text style={styles.linkLight}>Delete</Text>
              </Pressable>
            </View>
          </View>
        );
      })}

      <Text style={styles.section}>KEY TASKS</Text>
      {keyTasks.length === 0 && <Text style={styles.empty}>No starred tasks yet. Star key ones in the Tasks tab.</Text>}
      {keyTasks.map((t) => (
        <TaskCard
          key={t.id}
          task={t}
          areaLabel={t.area_id ? areas[t.area_id] : undefined}
          onComplete={() => completeTask(t)}
        />
      ))}

      <Text style={styles.section}>
        HABITS · {doneCount}/{habits.length}
      </Text>
      <View style={styles.card}>
        <View style={styles.barTrack}>
          <View style={[styles.barFill, { width: `${habits.length ? (doneCount / habits.length) * 100 : 0}%` }]} />
        </View>
        {habits.map((h) => (
          <HabitRow key={h.id} habit={h} onToggle={(done) => onToggleHabit(h, done)} showStreak />
        ))}
      </View>

      <View style={styles.finHead}>
        <Text style={styles.section}>FINANCE · MTD</Text>
        <Pressable onPress={() => setFinShown((s) => !s)}>
          <Text style={styles.reveal}>{finShown ? 'Hide' : 'Reveal'}</Text>
        </Pressable>
      </View>
      <View style={styles.card}>
        {finShown ? (
          <>
            <Text style={styles.finTotal}>
              ${(finTotal / 1000).toFixed(1)}k<Text style={styles.finNet}>  net</Text>
            </Text>
            {finance.map((f) => (
              <View key={f.label} style={styles.finRow}>
                <View style={styles.finLeft}>
                  <View style={[styles.finDot, { backgroundColor: f.color }]} />
                  <Text style={styles.finLabel}>{f.label}</Text>
                </View>
                <Text style={styles.finVal}>${f.value.toLocaleString()}</Text>
              </View>
            ))}
            {finance.length === 0 && <Text style={styles.empty}>Nothing logged this month.</Text>}
          </>
        ) : (
          <Text style={styles.finLocked}>Private · tap reveal</Text>
        )}
      </View>
      <Pressable style={styles.ghostBtn} onPress={logFinance}>
        <Text style={styles.ghostBtnText}>＋ Log income / expense</Text>
      </Pressable>

      <EditModal config={modal} onClose={() => setModal(null)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 48 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface },
  h1: { fontSize: 30, fontWeight: '800', color: colors.text, letterSpacing: -0.5, marginBottom: 8 },
  section: { fontSize: 11, fontWeight: '700', letterSpacing: 1.5, color: colors.muted, marginTop: 24, marginBottom: 8 },
  empty: { color: colors.muted2, fontSize: 14 },
  card: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radius.card, padding: 16 },

  goalCard: { backgroundColor: colors.fcBg, borderRadius: radius.card, padding: 18, marginBottom: 10 },
  goalKicker: { color: colors.accent, fontSize: 10.5, fontWeight: '700', letterSpacing: 1.4 },
  goalNum: { color: colors.fcText, fontSize: 56, fontWeight: '800', lineHeight: 60, marginTop: 2 },
  goalTitle: { color: colors.fcMuted, fontSize: 14, marginTop: 4 },
  goalActions: { flexDirection: 'row', gap: 18, marginTop: 14 },
  linkLight: { color: colors.fcMuted, fontWeight: '600', fontSize: 12.5 },

  barTrack: { height: 8, borderRadius: 999, backgroundColor: colors.track, overflow: 'hidden', marginBottom: 6 },
  barFill: { height: '100%', borderRadius: 999, backgroundColor: colors.accent },

  finHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  reveal: { color: colors.accentText, fontWeight: '700', fontSize: 12.5, marginTop: 24, marginBottom: 8 },
  finTotal: { fontSize: 28, fontWeight: '800', color: colors.text },
  finNet: { fontSize: 13, fontWeight: '600', color: colors.muted2 },
  finRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 },
  finLeft: { flexDirection: 'row', alignItems: 'center', gap: 9 },
  finDot: { width: 9, height: 9, borderRadius: 3 },
  finLabel: { fontSize: 13, color: colors.muted },
  finVal: { fontSize: 13.5, fontWeight: '700', color: colors.text },
  finLocked: { color: colors.muted2, fontSize: 13, textAlign: 'center', paddingVertical: 18 },

  ghostBtn: { borderWidth: 1, borderColor: colors.border2, borderRadius: 999, paddingVertical: 12, alignItems: 'center', marginTop: 12 },
  ghostBtnText: { color: colors.muted, fontWeight: '600' },
});
