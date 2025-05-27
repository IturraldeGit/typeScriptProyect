(() => {
  let productTitle = "My amazing product";
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = "My amazing product v2";
  console.log('Product Title: ', productTitle);

  const productDescription = 'This is an "amazing" product that you will love!';
  console.log('Product Description: ', productDescription);

  let productPrice = 10.99;
  let isNew: boolean = false;

  const summary = `
  Title: ${productTitle}

  Description: ${productDescription}
  Price: $${productPrice}
  Is New: ${isNew}
  `;
  console.log(summary);
})();
