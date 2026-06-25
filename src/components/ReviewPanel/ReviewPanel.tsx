import { useMemo } from 'react';
import { useBundle } from '../../hooks/useBundle';
import { calculateSavings } from '../../utils/calculateSavings';
import { calculateTotal } from '../../utils/calculateTotal';
import { groupReviewItems } from '../../utils/groupReviewItems';
import { Icon } from '../Icon/Icon';
import { ReviewGroup } from './ReviewGroup';
import { TotalSection } from './TotalSection';
import styles from './ReviewPanel.module.scss';

export function ReviewPanel() {
  const { state } = useBundle();
  const groups = useMemo(() => groupReviewItems(state), [state]);
  const total = useMemo(() => calculateTotal(state), [state]);
  const savings = useMemo(() => calculateSavings(state), [state]);
  return <aside className={styles.panel} id="review-panel" aria-label="Your security system">
    <div className={styles.heading}><span className={styles.eyebrow}>REVIEW</span><h2>Your security system</h2><p>Review your personalized protection system designed to keep what matters most safe.</p></div>
    <div className={styles.groups}>
      <ReviewGroup title="Cameras" items={groups.cameras} />
      <ReviewGroup title="Sensors" items={groups.sensors} />
      <ReviewGroup title="Accessories" items={groups.accessories} />
      <ReviewGroup title="Plan" items={groups.plan} />
    </div>
    <TotalSection total={total} savings={savings} />
  </aside>;
}
