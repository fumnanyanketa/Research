import { initWhisper, type WhisperContext } from 'whisper.rn';
import { RealtimeTranscriber } from 'whisper.rn/realtime-transcription/index';
import { AudioPcmStreamAdapter } from 'whisper.rn/realtime-transcription/adapters/AudioPcmStreamAdapter';
import type { RealtimeTranscribeEvent } from 'whisper.rn/realtime-transcription/types';
import { Directory, File, Paths } from 'expo-file-system';

// Multilingual base model, quantized (~60 MB). Downloaded once on first use,
// then transcription runs fully on-device — free and offline.
// Swap for ggml-small-q5_1.bin (~190 MB) if you want higher accuracy.
const MODEL_URL =
  'https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base-q5_1.bin';
const MODEL_NAME = 'ggml-base-q5_1.bin';

let context: WhisperContext | null = null;

export async function ensureModelDownloaded(): Promise<File> {
  const modelsDir = new Directory(Paths.document, 'whisper-models');
  if (!modelsDir.exists) modelsDir.create();
  const modelFile = new File(modelsDir, MODEL_NAME);
  if (modelFile.exists) return modelFile;
  return await File.downloadFileAsync(MODEL_URL, modelFile);
}

export async function getWhisperContext(): Promise<WhisperContext> {
  if (context) return context;
  const model = await ensureModelDownloaded();
  context = await initWhisper({ filePath: model.uri });
  return context;
}

export type { RealtimeTranscribeEvent };

// v1 keeps only the transcript, not the raw audio. To also save a .wav,
// add react-native-fs and pass { fs, audioOutputPath } below.
export async function createTranscriber(
  onTranscribe: (event: RealtimeTranscribeEvent) => void,
  onError: (error: string) => void,
): Promise<RealtimeTranscriber> {
  const whisperContext = await getWhisperContext();
  return new RealtimeTranscriber(
    { whisperContext, audioStream: new AudioPcmStreamAdapter() },
    {
      audioSliceSec: 30,
      transcribeOptions: { language: 'auto' },
    },
    { onTranscribe, onError },
  );
}

export function collectTranscript(transcriber: RealtimeTranscriber): string {
  return transcriber
    .getTranscriptionResults()
    .map(({ transcribeEvent }) => transcribeEvent.data?.result ?? '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
