import type { PropsWithChildren } from 'react';
import { Icon } from '../Icon/Icon';
import type { ProductCategory } from '../../types/product';
import styles from './Accordion.module.scss';

interface Props extends PropsWithChildren {
  step: number;
  title: string;
  category: ProductCategory;
  selectedCount: number;
  active: boolean;
  onToggle: () => void;
}

export function AccordionItem({ step, title, category, selectedCount, active, onToggle, children }: Props) {
  const panelId = `accordion-panel-${step}`;
  return (
    <section className={`${styles.item} ${active ? styles.active : ''}`}>
      <button type="button" className={styles.trigger} onClick={onToggle} aria-expanded={active} aria-controls={panelId}>
        <span className={styles.stepLabel}>STEP {step} OF 4</span>
        <span className={styles.title}><Icon name={category} /><strong>{title}</strong></span>
        <span className={styles.selectedCount}>{selectedCount} selected</span>
        <span className={styles.chevron}><Icon name="chevron" size={16} /></span>
      </button>
      {active && <div id={panelId} className={styles.panel}>{children}</div>}
    </section>
  );
}
