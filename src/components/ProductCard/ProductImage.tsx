import { memo } from 'react';
import styles from './ProductCard.module.scss';

export const ProductImage = memo(function ProductImage({ src, alt }: { src: string; alt: string }) {
  return <div className={styles.imageWrap}><img src={src} alt={alt} loading="lazy" onError={(event) => { event.currentTarget.src = '/images/product-placeholder.svg'; }} /></div>;
});
