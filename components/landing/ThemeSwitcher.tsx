'use client';

import { useTheme } from '@/lib/theme';
import { colors } from '@/lib/content/base';

export function ThemeSwitcher() {
  const { mode, toggle, theme } = useTheme();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
      }}
    >
      {/* Label */}
      <div
        style={{
          backgroundColor: colors.charcoal,
          color: colors.white,
          padding: '8px 14px',
          borderRadius: theme.radiusSmall,
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontFamily: '"JetBrains Mono", monospace',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        Style: {theme.label}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: colors.white,
          border: `2px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
          borderRadius: theme.radiusMedium,
          padding: '12px 20px',
          cursor: 'pointer',
          boxShadow: theme.shadowCard,
          transition: `all ${theme.animationMedium} ease`,
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        {/* Toggle Track */}
        <div
          style={{
            width: '52px',
            height: '28px',
            backgroundColor: mode === 'elegant' ? colors.burgundy : colors.charcoal,
            borderRadius: '14px',
            position: 'relative',
            transition: `background-color ${theme.animationMedium} ease`,
          }}
        >
          {/* Toggle Thumb */}
          <div
            style={{
              position: 'absolute',
              top: '3px',
              left: mode === 'elegant' ? '3px' : '25px',
              width: '22px',
              height: '22px',
              backgroundColor: colors.white,
              borderRadius: '50%',
              transition: `left ${theme.animationMedium} ease`,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>

        {/* Labels */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: colors.charcoal,
            }}
          >
            {mode === 'elegant' ? 'Elegant' : 'Solid'}
          </span>
          <span
            style={{
              fontSize: '11px',
              color: colors.charcoalLight,
            }}
          >
            Click to switch
          </span>
        </div>
      </button>

      {/* Info text */}
      <div
        style={{
          fontSize: '10px',
          color: colors.charcoalLight,
          textAlign: 'right',
          maxWidth: '160px',
          lineHeight: 1.4,
        }}
      >
        {mode === 'elegant'
          ? 'Warm, serif headlines, soft shadows'
          : 'Sharp, sans-serif, structured look'}
      </div>
    </div>
  );
}
