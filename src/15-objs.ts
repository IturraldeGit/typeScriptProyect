(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    cretedAt: Date;
    stock: number;
    size?: Sizes;
  }

  const products: Product[] = [];

  const addProcuct = (data: Product) => {
    products.push(data);
  }

  addProcuct({
    title: 'Product 1',
    cretedAt: new Date(),
    stock: 10,
    size: 'S'
  });

  addProcuct({
    title: 'Product 2',
    cretedAt: new Date(),
    stock: 20
  });
})();
