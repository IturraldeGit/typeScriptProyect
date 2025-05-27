(() => {
  let prices = [10.99, 19.99, 9.99];
  // prices.push('asad');
  // prices.push(true);
  // prices.push({ name: 'John' });
  prices.push(12.99);

  let miscellaneous = [1, 2, 3, 'John', true, { name: 'John' }];
  let products = ['hola', true]

  let mixed : (string | number | boolean)[] = [];
  mixed.push('hola');
  mixed.push(true);
  mixed.push(12);
  console.log('Mixed: ', mixed);

  let newPrices = prices.map(item => item * 2);
  console.log('Prices: ', prices);
  console.log('New Prices: ', newPrices);
})();
