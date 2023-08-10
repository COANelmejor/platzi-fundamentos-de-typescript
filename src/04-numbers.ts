(()=> {
  let productPrice = 100;
  productPrice = 200;
  console.log('productPrice', productPrice);

  let customerAge: number = 25;
  // customerAge = customerAge + '25'; // Error: Type 'string' is not assignable to type 'number'
  customerAge = customerAge + 1; // OK
  console.log('customerAge', customerAge);

  /*
  let productInStock: number;

  console.log('productInStock', productInStock); // Variable 'productInStock' is used before being assigned
  if (productPrice > 10) {
    console.log('productInStock', productInStock);
  }
  */
  let discount = parseInt('10');
  console.log('discount', discount);

  let hex = 0xfff; // 4095
  console.log('hex', hex);
  let bin = 0b1110; // 14
  console.log('bin', bin);

  const myNumber: Number = 100; // Correcto pero no recomendado
})();
