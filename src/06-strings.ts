(() => {
  let productTitle = 'My amazing product';
  // productTitle = null // Type 'null' is not assignable to type 'string'
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "My amazing product's description"; // Double quotes is ok. Use of apostrophe will be a character
  console.log('productDescription', productDescription);

  let myProductPrice = 29.99;
  let isNew = true;
  const summary = `
    Product: ${productTitle}
    Description: ${productDescription}
    price: $${myProductPrice}
    isNew: ${isNew}
  `; // Use of backtick to interpolate variables
  console.log('summary', summary);

  const myProduct : String = 'My amazing product'; // Works but not recommended
})();

