import { memo } from 'react';
import styles from './ProductCard.module.scss';

export const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

export const ProductPrice = memo(function ProductPrice({ price, compareAtPrice, suffix = '' }: { price: number; compareAtPrice?: number; suffix?: string }) {
  return <div className={`${styles.price} ${compareAtPrice ? styles.discountedPrice : styles.regularPrice}`}><strong>{formatCurrency(price)}{suffix}</strong>{compareAtPrice && <del>{formatCurrency(compareAtPrice)}{suffix}</del>}</div>;
});
