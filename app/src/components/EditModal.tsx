import { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, radius } from '../theme';

export interface EditModalConfig {
  title: string;
  label?: string;
  initial?: string;
  numeric?: boolean;
  onSubmit: (value: string) => void;
}

export function EditModal({ config, onClose }: { config: EditModalConfig | null; onClose: () => void }) {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(config?.initial ?? '');
  }, [config]);

  return (
    <Modal visible={!!config} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <View style={styles.sheet} onStartShouldSetResponder={() => true}>
          <Text style={styles.title}>{config?.title}</Text>
          {config?.label ? <Text style={styles.label}>{config.label}</Text> : null}
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={setValue}
            keyboardType={config?.numeric ? 'numeric' : 'default'}
            placeholderTextColor={colors.muted2}
            autoFocus
          />
          <View style={styles.row}>
            <Pressable style={[styles.btn, styles.cancel]} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.btn, styles.save]}
              onPress={() => {
                config?.onSubmit(value);
                onClose();
              }}
            >
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(20,18,16,0.45)', alignItems: 'center', justifyContent: 'center', padding: 28 },
  sheet: { width: '100%', backgroundColor: colors.card, borderRadius: radius.card, padding: 20 },
  title: { fontSize: 18, fontWeight: '700', color: colors.text },
  label: { fontSize: 13, color: colors.muted, marginTop: 6 },
  input: {
    borderWidth: 1,
    borderColor: colors.border2,
    backgroundColor: colors.inset,
    borderRadius: radius.md,
    padding: 12,
    fontSize: 16,
    color: colors.text,
    marginTop: 14,
  },
  row: { flexDirection: 'row', gap: 10, marginTop: 16, justifyContent: 'flex-end' },
  btn: { borderRadius: 999, paddingVertical: 10, paddingHorizontal: 18 },
  cancel: { backgroundColor: colors.inset },
  cancelText: { color: colors.muted, fontWeight: '600' },
  save: { backgroundColor: colors.accent },
  saveText: { color: colors.accentInk, fontWeight: '700' },
});
