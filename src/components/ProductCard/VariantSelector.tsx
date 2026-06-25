import { memo } from 'react';
import type { Variant } from '../../types/product';
import styles from './ProductCard.module.scss';

interface Props { variants: Variant[]; activeId: string; fallbackImage: string; onChange: (id: string) => void; }

export const VariantSelector = memo(function VariantSelector({ variants, activeId, fallbackImage, onChange }: Props) {
  return (
    <div className={styles.variants} role="radiogroup" aria-label="Choose color">
      {variants.map((variant) => (
        <button key={variant.id} type="button" role="radio" aria-checked={activeId === variant.id} className={activeId === variant.id ? styles.variantActive : ''} onClick={() => onChange(variant.id)}>
          <span className={`${styles.variantThumb} ${styles[variant.id] ?? ''}`} aria-hidden="true">
            <img src={variant.image ?? fallbackImage} alt="" />
          </span>
          <span>{variant.name}</span>
        </button>
      ))}
    </div>
  );
});
