import { useCallback, useContext, useMemo } from 'react';
import { BundleContext } from '../context/BundleContext';

export function useBundle() {
  const context = useContext(BundleContext);
  if (!context) throw new Error('useBundle must be used within BundleProvider');
  const { state, dispatch } = context;

  const quantityFor = useCallback((productId: string, variantId?: string) =>
    state.selectedItems.find((item) => item.productId === productId && item.variantId === variantId)?.quantity ?? 0,
  [state.selectedItems]);

  return useMemo(() => ({ state, dispatch, quantityFor }), [state, dispatch, quantityFor]);
}
