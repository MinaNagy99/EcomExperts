export type ProductCategory = 'cameras' | 'plan' | 'sensors' | 'accessories';

export interface Variant {
  id: string;
  name: string;
  image?: string;
  quantity: number;
}

export interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  variants?: Variant[];
  featured?: boolean;
}
