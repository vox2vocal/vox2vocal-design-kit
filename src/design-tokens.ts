export const designTokens = {
  colors: {
    background: {
      app: '#050505',
      surface1: '#121212',
      surface2: '#1A1A1A',
      surfaceWarm: '#1a1010',
      overlay: 'rgba(5, 5, 5, 0.95)',
    },
    accent: {
      redDefault: '#DC2626',
      redLight: '#EF4444',
      redDark: '#991B1B',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A1AA',
      tertiary: '#71717A',
    },
    border: {
      default: '#27272A',
      focus: 'rgba(239, 68, 68, 0.5)',
    },
  },
  effects: {
    ambientGlow: '0 0 120px rgba(220, 38, 38, 0.16)',
    glowPrimary: '0 0 20px rgba(220, 38, 38, 0.4)',
    glowSubtle: '0 0 15px rgba(220, 38, 38, 0.1)',
    shadowDrop: '0 0 10px rgba(255, 255, 255, 0.3)',
  },
  typography: {
    fontFamily:
      'Pretendard, "Noto Sans KR", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { size: '30px', weight: 700 },
    h2: { size: '24px', weight: 700 },
    h3: { size: '18px', weight: 700 },
    bodyPrimary: { size: '14px', weight: 500 },
    bodySecondary: { size: '12px', weight: 400 },
    caption: { size: '11px', weight: 500 },
    timerMono: { size: '56px', weight: 300, tracking: '0.16em' },
  },
  layout: {
    mobileMaxWidth: '384px',
    mobilePadding: '24px',
    topNavHeight: '56px',
    radius: {
      xl: '12px',
      xxl: '16px',
      full: '999px',
    },
  },
} as const;

export type DesignTokens = typeof designTokens;

