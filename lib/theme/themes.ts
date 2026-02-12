// Theme configurations for elegant (current) and solid (SaaS-like) styles

export type ThemeMode = 'elegant' | 'solid';

export interface ThemeConfig {
  name: ThemeMode;
  label: string;

  // Typography
  headingFont: string;
  bodyFont: string;

  // Border radius
  radiusSmall: string;
  radiusMedium: string;
  radiusLarge: string;
  radiusPill: string;

  // Shadows
  shadowSoft: string;
  shadowMedium: string;
  shadowStrong: string;
  shadowCard: string;
  shadowButton: string;

  // Border opacity
  borderOpacity: number;
  borderOpacityHover: number;

  // Animation timing
  animationFast: string;
  animationMedium: string;
  animationSlow: string;

  // Decorative blur
  decorativeBlur: string;

  // Specific overrides
  navBlur: string;
  cardPadding: string;
  sectionPadding: string;
}

export const themes: Record<ThemeMode, ThemeConfig> = {
  elegant: {
    name: 'elegant',
    label: 'Elegant',

    // Typography - Serif headlines
    headingFont: '"Playfair Display", Georgia, serif',
    bodyFont: '"DM Sans", -apple-system, sans-serif',

    // Border radius - Very rounded
    radiusSmall: '12px',
    radiusMedium: '20px',
    radiusLarge: '28px',
    radiusPill: '100px',

    // Shadows - Soft and diffused
    shadowSoft: '0 4px 20px rgba(107, 45, 60, 0.04)',
    shadowMedium: '0 8px 32px -8px rgba(107, 45, 60, 0.08)',
    shadowStrong: '0 30px 60px -15px rgba(107, 45, 60, 0.2), 0 10px 20px -10px rgba(107, 45, 60, 0.1)',
    shadowCard: '0 30px 60px -15px rgba(107, 45, 60, 0.2), 0 10px 20px -10px rgba(107, 45, 60, 0.1)',
    shadowButton: '0 4px 14px -3px rgba(107, 45, 60, 0.35)',

    // Border opacity - Very subtle
    borderOpacity: 0.06,
    borderOpacityHover: 0.12,

    // Animation timing - Smooth and slow
    animationFast: '0.3s',
    animationMedium: '0.5s',
    animationSlow: '0.7s',

    // Decorative blur - Heavy
    decorativeBlur: '60px',

    // Specific
    navBlur: '20px',
    cardPadding: '44px',
    sectionPadding: '120px',
  },

  solid: {
    name: 'solid',
    label: 'Solid',

    // Typography - Sans-serif throughout (more tech/SaaS)
    headingFont: '"DM Sans", -apple-system, sans-serif',
    bodyFont: '"DM Sans", -apple-system, sans-serif',

    // Border radius - More structured
    radiusSmall: '8px',
    radiusMedium: '12px',
    radiusLarge: '16px',
    radiusPill: '8px',

    // Shadows - Sharper and more defined
    shadowSoft: '0 2px 8px rgba(107, 45, 60, 0.06)',
    shadowMedium: '0 4px 16px -4px rgba(107, 45, 60, 0.12)',
    shadowStrong: '0 12px 32px -8px rgba(107, 45, 60, 0.18)',
    shadowCard: '0 8px 24px -8px rgba(107, 45, 60, 0.15)',
    shadowButton: '0 2px 8px -2px rgba(107, 45, 60, 0.3)',

    // Border opacity - More visible
    borderOpacity: 0.12,
    borderOpacityHover: 0.2,

    // Animation timing - Snappier
    animationFast: '0.15s',
    animationMedium: '0.25s',
    animationSlow: '0.4s',

    // Decorative blur - Reduced
    decorativeBlur: '30px',

    // Specific
    navBlur: '12px',
    cardPadding: '36px',
    sectionPadding: '100px',
  },
};

// Helper to get CSS variable value based on theme
export function getThemeValue<K extends keyof ThemeConfig>(
  theme: ThemeConfig,
  key: K
): ThemeConfig[K] {
  return theme[key];
}
