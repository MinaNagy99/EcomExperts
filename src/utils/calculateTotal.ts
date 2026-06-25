import type { BundleState } from '../types/bundle';
import { calculateSubtotal } from './calculateSubtotal';

export function calculateTotal(state: BundleState): number {
  return calculateSubtotal(state);
}
