'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeMode, ThemeConfig, themes } from './themes';

interface ThemeContextType {
  mode: ThemeMode;
  theme: ThemeConfig;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export function ThemeProvider({ children, defaultMode = 'elegant' }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const theme = themes[mode];

  // Persist theme preference
  useEffect(() => {
    const saved = localStorage.getItem('observly-theme') as ThemeMode | null;
    if (saved && (saved === 'elegant' || saved === 'solid')) {
      setMode(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('observly-theme', mode);
    // Update CSS custom properties on root
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === 'elegant' ? 'solid' : 'elegant'));
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, setMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Export themes for direct access if needed
export { themes };
export type { ThemeMode, ThemeConfig };
