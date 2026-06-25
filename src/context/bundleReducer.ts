import type { BundleAction, BundleState, SelectedItem } from '../types/bundle';

function changeQuantity(
  selectedItems: SelectedItem[],
  productId: string,
  variantId: string | undefined,
  amount: number,
): SelectedItem[] {
  const index = selectedItems.findIndex(
    (item) => item.productId === productId && item.variantId === variantId,
  );
  if (index === -1) {
    return amount > 0 ? [...selectedItems, { productId, variantId, quantity: amount }] : selectedItems;
  }
  const nextQuantity = Math.max(0, selectedItems[index].quantity + amount);
  if (nextQuantity === 0) return selectedItems.filter((_, itemIndex) => itemIndex !== index);
  return selectedItems.map((item, itemIndex) =>
    itemIndex === index ? { ...item, quantity: nextQuantity } : item,
  );
}

export function bundleReducer(state: BundleState, action: BundleAction): BundleState {
  switch (action.type) {
    case 'INCREMENT_ITEM':
      return { ...state, selectedItems: changeQuantity(state.selectedItems, action.payload.productId, action.payload.variantId, 1) };
    case 'DECREMENT_ITEM':
      return { ...state, selectedItems: changeQuantity(state.selectedItems, action.payload.productId, action.payload.variantId, -1) };
    case 'SET_VARIANT':
      return { ...state, activeVariants: { ...state.activeVariants, [action.payload.productId]: action.payload.variantId } };
    case 'SET_ACTIVE_STEP':
      return { ...state, activeStep: Math.min(4, Math.max(1, action.payload)) };
    case 'RESTORE_BUNDLE':
      return action.payload;
    case 'SAVE_BUNDLE':
      return state;
    default:
      return state;
  }
}
