(()=>{
  // Type for sizes
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    name: string,
    price: number,
    stock: number
    size?: Sizes
    createAt?: Date
  }
  // Array of products
  const products: Product[] = [];

  // Function to add a product
  const addProduct = (product: Product) => {
    products.push(product);
  }

  // Products to add
  addProduct({name: 'Shirt', price: 10, stock: 5, createAt: new Date()});
  addProduct({name: 'Shirt', price: 10, stock: 5, size: 'S', createAt: new Date(1994,5,16)});
  addProduct({name: 'Shirt', price: 10, stock: 1, size: 'M', createAt: new Date()});
  addProduct({name: 'Shirt', price: 10, stock: 25, size: 'L'});
  addProduct({name: 'Shirt', price: 10, stock: 30, size: 'XL', createAt: new Date()});
  // addProduct(42); // Argument of type 'number' is not assignable to parameter of type 'Product'

  // addProduct({name: 'Shirt', price: 10, size: 'XL', createAt: new Date()}); // This lead to the next error:
  // Argument of type '{ name: string; price: number; size: "XL"; createAt: Date; }' is not assignable to parameter of type 'Product'.
  // Property 'stock' is missing in type '{ name: string; price: number; size: "XL"; createAt: Date; }' but required in type 'Product'
  console.log(products);

})();
