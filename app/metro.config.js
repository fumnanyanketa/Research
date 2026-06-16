// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const fs = require('fs');
const path = require('path');

const config = getDefaultConfig(__dirname);

// whisper.rn v0.6.0 ships a buggy package.json "exports" map ("./*" ->
// "./lib/module/*") that resolves the "realtime-transcription" subpaths to bare
// directories / extensionless targets. Metro's production package-exports
// resolver (used by `expo export:embed`, i.e. the EAS "Bundle JavaScript" phase)
// then fails to find them. Hard-map the prefix to the real compiled files.
// Resolve via the directory directly — whisper.rn's broken "exports" map also
// blocks require.resolve('whisper.rn/package.json'), so don't go through it.
const realtimeBase = path.join(__dirname, 'node_modules', 'whisper.rn', 'lib', 'module', 'realtime-transcription');

function resolveWhisperRealtime(moduleName) {
  const sub = moduleName.slice('whisper.rn/realtime-transcription'.length).replace(/^\//, '');
  let target = sub ? path.join(realtimeBase, sub) : realtimeBase;
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    target = path.join(target, 'index.js');
  } else if (!fs.existsSync(target) && fs.existsSync(`${target}.js`)) {
    target = `${target}.js`;
  }
  return target;
}

const upstreamResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'whisper.rn/realtime-transcription' || moduleName.startsWith('whisper.rn/realtime-transcription/')) {
    return { type: 'sourceFile', filePath: resolveWhisperRealtime(moduleName) };
  }
  const resolver = upstreamResolveRequest || context.resolveRequest;
  return resolver(context, moduleName, platform);
};

module.exports = config;
