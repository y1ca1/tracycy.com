import { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { ThemeMode } from '@/types/theme';

const usePreferedThemeMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.Dark);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeMode(mediaQuery.matches ? ThemeMode.Dark : ThemeMode.Light);

    const handler = () =>
      setThemeMode(mediaQuery.matches ? ThemeMode.Dark : ThemeMode.Light);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return themeMode;
};

export const useThemeMode = (): [
  ThemeMode,
  React.Dispatch<React.SetStateAction<ThemeMode>>,
] => {
  const [themeMode, setThemeMode] = useLocalStorageState<ThemeMode>(
    'themeMode',
    {
      defaultValue: undefined,
    },
  );
  const preferedThemeMode = usePreferedThemeMode();

  const currentThemeMode =
    themeMode === undefined ? preferedThemeMode : themeMode;
  const isDark = currentThemeMode === ThemeMode.Dark;

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.remove(isDark ? ThemeMode.Light : ThemeMode.Dark);
    root.classList.add(isDark ? ThemeMode.Dark : ThemeMode.Light);
  }, [isDark]);

  return [currentThemeMode, setThemeMode];
};
