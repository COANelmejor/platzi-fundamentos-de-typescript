/**
 * Sizes type
 *
 * @export Sizes
 */
export type Sizes = 'S' | 'M' | 'L' | 'XL';

/**
 * Product type
 *
 * @export Product
 */
export type Product = {
  name: string,
  price: number,
  stock: number
  size?: Sizes
  createAt?: Date
}
