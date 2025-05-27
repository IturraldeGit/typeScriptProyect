(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    };
  }

  const product1 = createProductToJson('P1', new Date(), 10, 'M');
  console.log(product1);
  console.log(product1.stock);
  console.log(product1.size);
  const product2 = createProductToJson('P2', new Date(), 0);
  console.log(product2);
})();
