import { useEffect, useMemo, useReducer, type PropsWithChildren } from 'react';
import products from '../data/products.json';
import type { BundleState } from '../types/bundle';
import type { Product } from '../types/product';
import { loadBundle, saveBundle } from '../utils/storage';
import { BundleContext } from './BundleContext';
import { bundleReducer } from './bundleReducer';

const initialState: BundleState = {
  products: products as Product[],
  activeStep: 1,
  activeVariants: { 'wyze-cam-v4': 'white', 'wyze-cam-pan-v3': 'white' },
  selectedItems: [
    { productId: 'wyze-cam-v4', variantId: 'white', quantity: 1 },
    { productId: 'wyze-cam-pan-v3', variantId: 'white', quantity: 2 },
    { productId: 'motion-sensor', quantity: 3 },
    { productId: 'leak-sensor', quantity: 1 },
    { productId: 'micro-sd-card', quantity: 1 },
    { productId: 'cam-unlimited', quantity: 1 },
  ],
};

function getInitialState(): BundleState {
  const restored = loadBundle();
  if (!restored) return initialState;
  return { ...initialState, ...restored, products: products as Product[] };
}

export function BundleProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(bundleReducer, undefined, getInitialState);

  useEffect(() => saveBundle(state), [state]);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <BundleContext.Provider value={value}>{children}</BundleContext.Provider>;
}
