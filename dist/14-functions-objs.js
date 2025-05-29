"use strict";
(() => {
    const login = (data) => {
        console.log('Email: ', data.email);
        console.log('Password: ', data.password);
    };
    login({
        email: 'email@gmail.com',
        password: '123456'
    });
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
    console.log(products);
})();
