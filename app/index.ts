import { registerRootComponent } from 'expo';
import { Buffer } from 'buffer';

import App from './App';

// whisper.rn's realtime transcription pulls in safe-buffer, which expects a
// global Buffer. React Native doesn't provide one, so polyfill it here.
const globalScope = globalThis as { Buffer?: typeof Buffer };
if (typeof globalScope.Buffer === 'undefined') {
  globalScope.Buffer = Buffer;
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
