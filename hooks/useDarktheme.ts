'use client';
import { useEffect, useState } from 'react';

export default function useDarktheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
