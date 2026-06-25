import { memo } from 'react';
import { useBundle } from '../../hooks/useBundle';
import type { ReviewItemModel } from '../../types/review';
import { formatCurrency } from '../ProductCard/ProductPrice';
import { QuantityStepper } from '../ProductCard/QuantityStepper';
import styles from './ReviewPanel.module.scss';

export const ReviewItem = memo(function ReviewItem({ item }: { item: ReviewItemModel }) {
  const { dispatch } = useBundle();
  const payload = { productId: item.productId, variantId: item.variantId };
  const isPlan = item.category === 'plan';
  const priceSuffix = isPlan ? '/mo' : '';
  return <li className={`${styles.reviewItem} ${isPlan ? styles.planReviewItem : ''}`}>
    <img src={item.image} alt={isPlan ? item.name : ''} onError={(event) => { event.currentTarget.src = '/images/product-placeholder.svg'; }} />
    {!isPlan && <span className={styles.itemName}>{item.name}</span>}
    {!isPlan && <QuantityStepper compact label={item.name} quantity={item.quantity} onIncrement={() => dispatch({ type: 'INCREMENT_ITEM', payload })} onDecrement={() => dispatch({ type: 'DECREMENT_ITEM', payload })} />}
    <span className={styles.itemPrice}>{item.compareAtPrice && <del>{formatCurrency(item.compareAtPrice * item.quantity)}{priceSuffix}</del>}<strong>{formatCurrency(item.unitPrice * item.quantity)}{priceSuffix}</strong></span>
  </li>;
});
