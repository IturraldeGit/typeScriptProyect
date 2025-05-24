"use strict";
(() => {
    // TypeScript can infer types based on the value assigned to a variable
    let myProductName = 'Producto 1';
    let myProductPrice = 123;
    // If you use `const`, TypeScript will infer the type as a literal type
    const myUnchangedPrice = 123;
    // If you want to explicitly define the type, you can do it like this:
    let myExplicitProductName = 'Producto 1';
    let myConstPrice = 123;
})();
