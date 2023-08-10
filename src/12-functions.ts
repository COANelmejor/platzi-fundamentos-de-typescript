(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductoToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product = createProductoToJson('Zapato', new Date(), 100, 'XL');
  console.log(product);
  console.log(product.title);
  console.log(product.createdAt);
  console.log(product.stock);
  console.log(product.size);

  const createProductoToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => ({
    title,
    createdAt,
    stock,
    size,
  });

  const product2 = createProductoToJson2('Zapato', new Date(), 100);
  console.log(product2);

  /*
  const createProductoToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes | undefined
  ) => ({
    title,
    createdAt,
    stock,
    size,
  });

  const product2 = createProductoToJson2('Zapato', new Date(), 100); // Expected 4 arguments, but got 3 | An argument for 'size' was not provided.
  */
})();
