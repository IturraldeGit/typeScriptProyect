"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProcuct)({
    title: 'Product 1',
    cretedAt: new Date(),
    stock: 10,
    size: 'S'
});
(0, product_service_1.addProcuct)({
    title: 'Product 2',
    cretedAt: new Date(),
    stock: 20
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
