(() => {
    let productPrice = 100;
    productPrice + 12;
    console.log('Product Price: ', productPrice);

    let customerAge : number = 28;
    // customerAge = customerAge + '1'; Typescrpt will throw an error because we are trying to add a string to a number
    customerAge = customerAge + 1; // This is valid
    console.log('Customer Age: ', customerAge);

    let productInStrock : number;
    // console.log('Product In Stock: ', productInStrock); // Typescript will throw an error because we are trying to use a variable that is not initialized
    // if (productInStrock > 10) {
    //     console.log('Product In Stock is greater than 10');
    // }

    let discount = parseInt('123');
    console.log('Discount: ', discount);
    if (discount <= 200) {
      console.log('apply');
    } else {
      console.log('not apply');
    }

    let hex = 0xfff;
    console.log('hex: ', hex);
    let binary = 0b1010;
    console.log('binary: ', binary);
})();
