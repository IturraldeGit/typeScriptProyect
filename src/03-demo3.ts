// If you uncomment the following lines, TypeScript will throw an error because this variables are declared in another file
// let myProductName = 'Producto 1';
// let myProductPrice = 123;

// To avoid this error, we can use Inmediately Invoked Function Expression (IIFE). (() => {})();

(() => {
    let myProductName = 'Producto 1';
    let myProductPrice = 123;
}) ();