import { useCallback, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try { return JSON.parse(localStorage.getItem(key) ?? '') as T; } catch { return initialValue; }
  });
  const update = useCallback((next: T) => {
    setValue(next);
    localStorage.setItem(key, JSON.stringify(next));
  }, [key]);
  return [value, update] as const;
}
