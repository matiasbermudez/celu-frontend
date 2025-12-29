export const menu = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
]

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  brand: string;
  model: string;
  state: 'new' | 'used' | 'refurbished';
};