import { memo, useCallback } from 'react';
import { useBundle } from '../../hooks/useBundle';
import type { Product } from '../../types/product';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { ProductPrice } from './ProductPrice';
import { QuantityStepper } from './QuantityStepper';
import { VariantSelector } from './VariantSelector';
import styles from './ProductCard.module.scss';

export const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  const { state, dispatch, quantityFor } = useBundle();
  const activeVariant = product.variants?.find(({ id }) => id === state.activeVariants[product.id]) ?? product.variants?.[0];
  const variantId = activeVariant?.id;
  const quantity = quantityFor(product.id, variantId);
  const isPlan = product.category === 'plan';
  const selected = product.variants
    ? product.variants.some((variant) => quantityFor(product.id, variant.id) > 0)
    : quantity > 0;
  const change = useCallback((type: 'INCREMENT_ITEM' | 'DECREMENT_ITEM') => dispatch({ type, payload: { productId: product.id, variantId } }), [dispatch, product.id, variantId]);

  return (
    <article className={`${styles.card} ${isPlan ? styles.planCard : ''} ${selected ? styles.selected : ''}`}>
      {product.badge && <span className={styles.badge}>{product.badge}</span>}
      <ProductImage src={activeVariant?.image ?? product.image} alt={product.title} />
      <ProductInfo title={product.title} description={product.description} />
      {product.variants && activeVariant && <VariantSelector variants={product.variants} activeId={activeVariant.id} fallbackImage={product.image} onChange={(id) => dispatch({ type: 'SET_VARIANT', payload: { productId: product.id, variantId: id } })} />}
      <div className={styles.cardFooter}>
        {!isPlan && <QuantityStepper label={activeVariant ? `${activeVariant.name} ${product.title}` : product.title} quantity={quantity} onDecrement={() => change('DECREMENT_ITEM')} onIncrement={() => change('INCREMENT_ITEM')} compact />}
        <ProductPrice price={product.price} compareAtPrice={product.compareAtPrice} suffix={isPlan ? '/mo' : ''} />
      </div>
    </article>
  );
});
