import type { BundleState } from '../types/bundle';

export const STORAGE_KEY = 'bundle-builder';

export function loadBundle(): BundleState | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? (JSON.parse(value) as BundleState) : null;
  } catch {
    return null;
  }
}

export function saveBundle(state: BundleState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable in private browsing; the builder still works in memory.
  }
}
