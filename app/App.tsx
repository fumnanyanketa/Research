import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TodayScreen } from './src/screens/TodayScreen';
import { CaptureScreen } from './src/screens/CaptureScreen';
import { TasksScreen } from './src/screens/TasksScreen';
import { HabitsScreen } from './src/screens/HabitsScreen';
import { colors } from './src/theme';

type Tab = 'today' | 'capture' | 'tasks' | 'habits';

const TABS: { key: Tab; label: string }[] = [
  { key: 'today', label: 'Today' },
  { key: 'capture', label: 'Capture' },
  { key: 'tasks', label: 'Tasks' },
  { key: 'habits', label: 'Habits' },
];

export default function App() {
  const [tab, setTab] = useState<Tab>('today');
  const [refreshKey, setRefreshKey] = useState(0);
  const bump = () => setRefreshKey((k) => k + 1);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.body}>
        {tab === 'today' && <TodayScreen refreshKey={refreshKey} onChanged={bump} />}
        {tab === 'capture' && <CaptureScreen onChanged={bump} />}
        {tab === 'tasks' && <TasksScreen refreshKey={refreshKey} onChanged={bump} />}
        {tab === 'habits' && <HabitsScreen refreshKey={refreshKey} />}
      </View>
      <View style={styles.tabBar}>
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <Pressable key={t.key} style={styles.tab} onPress={() => setTab(t.key)}>
              <View style={[styles.pill, active && styles.pillActive]}>
                <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{t.label}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface, paddingTop: 56 },
  body: { flex: 1 },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.fcBg,
    paddingVertical: 10,
    paddingBottom: 26,
    paddingHorizontal: 8,
  },
  tab: { flex: 1, alignItems: 'center' },
  pill: { paddingVertical: 7, paddingHorizontal: 18, borderRadius: 999 },
  pillActive: { backgroundColor: colors.accent },
  tabLabel: { fontSize: 12.5, color: colors.fcMuted, fontWeight: '600' },
  tabLabelActive: { color: colors.accentInk },
});
