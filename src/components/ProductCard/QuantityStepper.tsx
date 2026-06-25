import { memo } from 'react';
import styles from './ProductCard.module.scss';

interface Props {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  disabled?: boolean;
  compact?: boolean;
  label: string;
}

export const QuantityStepper = memo(function QuantityStepper({ quantity, onIncrement, onDecrement, disabled, compact, label }: Props) {
  return (
    <div className={`${styles.stepper} ${compact ? styles.compact : ''}`} aria-label={`${label} quantity`}>
      <button type="button" onClick={onDecrement} disabled={disabled || quantity === 0} aria-label={`Remove one ${label}`}>−</button>
      <output aria-live="polite" aria-label={`${quantity} selected`}>{quantity}</output>
      <button type="button" onClick={onIncrement} disabled={disabled} aria-label={`Add one ${label}`}>+</button>
    </div>
  );
});
