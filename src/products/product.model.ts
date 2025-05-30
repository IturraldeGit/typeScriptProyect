export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string;
  cretedAt: Date;
  stock: number;
  size?: Sizes;
};
