import type { BundleState } from '../types/bundle';
import type { ProductCategory } from '../types/product';

export function getSelectedCount(state: BundleState, category: ProductCategory): number {
  return state.selectedItems.reduce((count, item) => {
    const product = state.products.find(({ id }) => id === item.productId);
    return product?.category === category ? count + item.quantity : count;
  }, 0);
}
