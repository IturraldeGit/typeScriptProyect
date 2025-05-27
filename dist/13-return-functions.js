"use strict";
(() => {
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total.toString();
    };
    const printTotal = (prices) => {
        const rta = calcTotal(prices);
        console.log('Total: ', rta);
    };
    printTotal([1, 2, 3, 4, 5]);
})();
