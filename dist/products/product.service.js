"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.addProcuct = exports.products = void 0;
exports.products = [];
const addProcuct = (data) => {
    exports.products.push(data);
};
exports.addProcuct = addProcuct;
const calcStock = () => {
    let total = 0;
    exports.products.forEach((item) => {
        total += item.stock;
    });
    return total;
};
exports.calcStock = calcStock;
