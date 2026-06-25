import { Accordion } from '../components/Accordion/Accordion';
import { ReviewPanel } from '../components/ReviewPanel/ReviewPanel';
import styles from './BundleBuilderPage.module.scss';

export function BundleBuilderPage() {
  return <><main id="main" className={styles.page}><section className={styles.builder} aria-label="Bundle builder"><Accordion /></section><ReviewPanel /></main></>;
}
