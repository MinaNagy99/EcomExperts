import type { ProductCategory } from '../../types/product';

type IconName = ProductCategory | 'chevron' | 'shipping' | 'shield' | 'camera';

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  if (name === 'chevron') return <svg {...common}><path d="m8 10 4 4 4-4" /></svg>;
  if (name === 'shipping') return <svg {...common}><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
  if (name === 'shield' || name === 'accessories') return <svg {...common}><path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6z"/><path d="m9 12 2 2 4-4"/></svg>;
  if (name === 'plan') return <svg {...common}><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/></svg>;
  if (name === 'sensors') return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"/></svg>;
  return <svg {...common}><rect x="3" y="7" width="15" height="11" rx="2"/><path d="m18 10 3-2v9l-3-2zM7 7l1.5-3h4L14 7"/><circle cx="10.5" cy="12.5" r="2.5"/></svg>;
}
