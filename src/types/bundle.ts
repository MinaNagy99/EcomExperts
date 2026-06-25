import type { Product } from './product';

export interface SelectedItem {
  productId: string;
  variantId?: string;
  quantity: number;
}

export interface BundleState {
  products: Product[];
  selectedItems: SelectedItem[];
  activeStep: number;
  activeVariants: Record<string, string>;
}

export type BundleAction =
  | { type: 'INCREMENT_ITEM'; payload: { productId: string; variantId?: string } }
  | { type: 'DECREMENT_ITEM'; payload: { productId: string; variantId?: string } }
  | { type: 'SET_VARIANT'; payload: { productId: string; variantId: string } }
  | { type: 'SET_ACTIVE_STEP'; payload: number }
  | { type: 'RESTORE_BUNDLE'; payload: BundleState }
  | { type: 'SAVE_BUNDLE' };
