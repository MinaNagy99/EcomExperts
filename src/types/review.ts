import type { ProductCategory } from './product';

export interface ReviewItemModel {
  key: string;
  productId: string;
  variantId?: string;
  name: string;
  image: string;
  category: ProductCategory;
  quantity: number;
  unitPrice: number;
  compareAtPrice?: number;
}

export type ReviewGroups = Partial<Record<ProductCategory, ReviewItemModel[]>>;
