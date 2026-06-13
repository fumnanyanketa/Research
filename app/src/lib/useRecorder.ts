import { useCallback, useRef, useState } from 'react';
import { requestRecordingPermissionsAsync } from 'expo-audio';
import type { RealtimeTranscriber } from 'whisper.rn/realtime-transcription';
import { collectTranscript, createTranscriber } from './whisper';

export type RecorderPhase = 'idle' | 'preparing' | 'recording';

// Shared recording logic for both the conversation and quick-thought capture
// modes. Transcription runs on-device (free, private) via whisper.rn.
export function useRecorder(onError: (msg: string) => void) {
  const [phase, setPhase] = useState<RecorderPhase>('idle');
  const [transcript, setTranscript] = useState('');
  const ref = useRef<RealtimeTranscriber | null>(null);
  const slices = useRef<Record<number, string>>({});

  const start = useCallback(async () => {
    const { granted } = await requestRecordingPermissionsAsync();
    if (!granted) {
      onError('Microphone access is required to record.');
      return;
    }
    setPhase('preparing');
    try {
      slices.current = {};
      setTranscript('');
      const transcriber = await createTranscriber(
        (event) => {
          const r = event.data?.result;
          if (r !== undefined) {
            slices.current[event.sliceIndex] = r;
            setTranscript(assemble(slices.current));
          }
        },
        onError,
      );
      ref.current = transcriber;
      await transcriber.start();
      setPhase('recording');
    } catch (err) {
      onError(String(err));
      setPhase('idle');
    }
  }, [onError]);

  const stop = useCallback(async (): Promise<string> => {
    const transcriber = ref.current;
    ref.current = null;
    setPhase('idle');
    if (!transcriber) return '';
    await transcriber.stop();
    const final = collectTranscript(transcriber) || assemble(slices.current);
    await transcriber.release();
    setTranscript(final);
    return final;
  }, []);

  return { phase, transcript, start, stop };
}

function assemble(slices: Record<number, string>): string {
  return Object.keys(slices)
    .map(Number)
    .sort((a, b) => a - b)
    .map((i) => slices[i])
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
