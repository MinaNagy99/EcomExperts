import type { BundleState } from '../types/bundle';

export function calculateSubtotal(state: BundleState): number {
  return state.selectedItems.reduce((sum, item) => {
    const product = state.products.find(({ id }) => id === item.productId);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);
}
