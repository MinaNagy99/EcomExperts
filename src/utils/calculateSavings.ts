import type { BundleState } from '../types/bundle';

export function calculateSavings(state: BundleState): number {
  return state.selectedItems.reduce((sum, item) => {
    const product = state.products.find(({ id }) => id === item.productId);
    if (!product?.compareAtPrice) return sum;
    return sum + (product.compareAtPrice - product.price) * item.quantity;
  }, 0);
}
