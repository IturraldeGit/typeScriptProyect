"use strict";
(() => {
    const products = [];
    const addProcuct = (data) => {
        products.push(data);
    };
    addProcuct({
        title: 'Product 1',
        cretedAt: new Date(),
        stock: 10,
        size: 'S'
    });
    addProcuct({
        title: 'Product 2',
        cretedAt: new Date(),
        stock: 20
    });
})();
