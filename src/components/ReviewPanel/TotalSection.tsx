import { formatCurrency } from '../ProductCard/ProductPrice';
import styles from './ReviewPanel.module.scss';

interface Props { total: number; savings: number; }

export function TotalSection({ total, savings }: Props) {
  return <footer className={styles.totalSection}>
    <div className={styles.shipping}>
      <span className={styles.shippingTitle}>
        <img src="/images/shipping.png" alt="" aria-hidden="true" />
        <span>Fast Shipping</span>
      </span>
      <span className={styles.discountStack}>
        <del>$5.99</del>
        <strong>FREE</strong>
      </span>
    </div>
    <div className={styles.pricingSummary}>
      <img
        className={styles.satisfactionSeal}
        src="/images/100.png"
        alt="100% Wyze satisfaction guarantee"
      />
      <div className={styles.pricingArea}>
        <div className={styles.finance}>as low as $19.19/mo</div>
        <div className={styles.total}><del>{formatCurrency(total + savings)}</del><strong>{formatCurrency(total)}</strong></div>
      </div>
    </div>
    <p className={styles.savings}>Congrats! You&rsquo;re saving {formatCurrency(savings)} on your security bundle!</p>
    <button type="button" className={styles.checkout} onClick={() => alert('Checkout not implemented')}>Checkout</button>
    <button type="button" className={styles.save}>Save my system for later</button>
  </footer>;
}
