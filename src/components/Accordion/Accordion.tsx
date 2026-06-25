import { useMemo } from 'react';
import { useAccordion } from '../../hooks/useAccordion';
import { useBundle } from '../../hooks/useBundle';
import type { ProductCategory } from '../../types/product';
import { getSelectedCount } from '../../utils/getSelectedCount';
import { ProductCard } from '../ProductCard/ProductCard';
import { AccordionItem } from './AccordionItem';
import styles from './Accordion.module.scss';

const steps: { title: string; next: string; category: ProductCategory }[] = [
  { title: 'Choose your cameras', next: 'Choose your plan', category: 'cameras' },
  { title: 'Choose your plan', next: 'Choose your sensors', category: 'plan' },
  { title: 'Choose your sensors', next: 'Add extra protection', category: 'sensors' },
  { title: 'Add extra protection', next: 'Review your system', category: 'accessories' },
];

export function Accordion() {
  const { state } = useBundle();
  const { activeStep, setActiveStep, goNext } = useAccordion();
  const counts = useMemo(() => Object.fromEntries(steps.map(({ category }) => [category, getSelectedCount(state, category)])), [state]);
  return <div className={styles.accordion}>{steps.map((step, index) => {
    const stepNumber = index + 1;
    return <AccordionItem key={step.category} step={stepNumber} title={step.title} category={step.category} selectedCount={counts[step.category]} active={activeStep === stepNumber} onToggle={() => setActiveStep(stepNumber)}>
      <div className={styles.grid}>{state.products.filter(({ category }) => category === step.category).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      <button type="button" className={styles.nextButton} onClick={stepNumber < 4 ? goNext : () => document.getElementById('review-panel')?.scrollIntoView({ behavior: 'smooth' })}>Next: {step.next}</button>
    </AccordionItem>;
  })}</div>;
}
