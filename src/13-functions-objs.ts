(()=>{
  const loginWithParams = (email: string, password: string) => {
    console.log(email, password);
  }

  loginWithParams('email@example.com', 'password');

  const loginWithObject = (data : {email: string, password: string}) => {
    console.log(data);
  }

  loginWithObject({email: 'email@example.com', password: 'password'});

  // ----------------------------

  // Type for sizes
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  // Array of products
  const products: any[] = [];

  // Function to add a product
  const addProduct = (product: {
    name: string,
    price: number,
    stock: number
    size?: Sizes
    createAt?: Date
  }) => {
    products.push(product);
  }

  // Products to add
  addProduct({name: 'Shirt', price: 10, stock: 5, createAt: new Date()});
  addProduct({name: 'Shirt', price: 10, stock: 5, size: 'S', createAt: new Date()});
  addProduct({name: 'Shirt', price: 10, stock: 1, size: 'M', createAt: new Date()});
  addProduct({name: 'Shirt', price: 10, stock: 25, size: 'L'});
  addProduct({name: 'Shirt', price: 10, stock: 30, size: 'XL', createAt: new Date()});

  console.log(products);
})();
