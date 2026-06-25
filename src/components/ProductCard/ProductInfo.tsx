import { memo } from 'react';
import styles from './ProductCard.module.scss';

export const ProductInfo = memo(function ProductInfo({ title, description }: { title: string; description?: string }) {
  return <div className={styles.info}><h3>{title}</h3>{description && <p>{description}</p>}<button type="button" className={styles.learn}>Learn More</button></div>;
});
