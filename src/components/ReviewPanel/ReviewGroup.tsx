import type { ReviewItemModel } from '../../types/review';
import { ReviewItem } from './ReviewItem';
import styles from './ReviewPanel.module.scss';

export function ReviewGroup({ title, items }: { title: string; items?: ReviewItemModel[] }) {
  if (!items?.length) return null;
  return <section className={styles.group}><h3>{title}</h3><ul>{items.map((item) => <ReviewItem key={item.key} item={item} />)}</ul></section>;
}
