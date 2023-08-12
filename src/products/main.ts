import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'Shirt',
  price: 10,
  stock: 5,
  size: 'S',
  createAt: new Date(),
});
addProduct({
  name: 'Shirt',
  price: 10,
  stock: 1,
  size: 'M',
  createAt: new Date(),
});

console.log(products);

const stock = calcStock();
console.log(stock);
