import { products, addProcuct, calcStock } from './product.service';

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

console.log(products);
const total = calcStock();
console.log(total);
