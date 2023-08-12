import { Product } from './product.model';

/**
 * Array of all the products
 */
export const products: Product[] = [];

/**
 *
 * Add Products to the array
 *
 * @param product
 */
export const addProduct = (product: Product) => {
  products.push(product);
};

/**
 * Calculate the total stock of all the products
 *
 * @returns Total Stock
 */
export const calcStock = (): number => {
  let totalStock = 0;
  products.forEach((product) => {
    totalStock += product.stock;
  });
  return totalStock;
};
