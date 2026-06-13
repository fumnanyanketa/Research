import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TodayScreen } from './src/screens/TodayScreen';
import { CaptureScreen } from './src/screens/CaptureScreen';
import { TasksScreen } from './src/screens/TasksScreen';
import { HabitsScreen } from './src/screens/HabitsScreen';

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
        {TABS.map((t) => (
          <Pressable key={t.key} style={styles.tab} onPress={() => setTab(t.key)}>
            <Text style={[styles.tabLabel, tab === t.key && styles.tabActive]}>{t.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 56 },
  body: { flex: 1 },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e5e5ea',
    paddingVertical: 10,
    paddingBottom: 24,
  },
  tab: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 13, color: '#999', fontWeight: '600' },
  tabActive: { color: '#1c1c1e' },
});
