import type { BundleState } from '../types/bundle';
import type { ReviewGroups, ReviewItemModel } from '../types/review';

export function getReviewItems(state: BundleState): ReviewItemModel[] {
  return state.selectedItems.flatMap((selected) => {
    const product = state.products.find(({ id }) => id === selected.productId);
    if (!product || selected.quantity <= 0) return [];
    const variant = product.variants?.find(({ id }) => id === selected.variantId);
    return [{
      key: `${selected.productId}:${selected.variantId ?? 'default'}`,
      productId: selected.productId,
      variantId: selected.variantId,
      name: variant ? `${variant.name} ${product.title}` : product.title,
      image: variant?.image ?? product.image,
      category: product.category,
      quantity: selected.quantity,
      unitPrice: product.price,
      compareAtPrice: product.compareAtPrice,
    }];
  });
}

export function groupReviewItems(state: BundleState): ReviewGroups {
  return getReviewItems(state).reduce<ReviewGroups>((groups, item) => {
    (groups[item.category] ??= []).push(item);
    return groups;
  }, {});
}
