// Anchor design tokens (native) — light field, dark "feature" cards, lime accent.
export const colors = {
  bg: '#E7E5E0',
  surface: '#F3F1ED',
  card: '#FFFFFF',
  card2: '#F7F5F1',
  inset: '#F0EDE7',
  border: '#E7E3DC',
  border2: '#DBD6CD',
  text: '#181A1F',
  muted: '#6C7079',
  muted2: '#A0A4AC',
  faint: '#C9C5BD',
  track: '#ECEAE4',
  dotOff: '#DEDAD2',

  accent: '#CDEB45',
  accentInk: '#10130A',
  accentText: '#50700E',

  // dark feature card
  fcBg: '#15171C',
  fcBg2: '#1C1F26',
  fcBorder: '#282C34',
  fcText: '#F4F6F8',
  fcMuted: '#969BA5',
  fcMuted2: '#5E636D',

  red: '#DD5648',
  amber: '#D08524',
  grey: '#A6ABB3',
} as const;

export const radius = { card: 22, md: 16, sm: 12 } as const;

export const PRIORITY_COLOR: Record<string, string> = {
  high: colors.red,
  medium: colors.amber,
  low: colors.grey,
};
