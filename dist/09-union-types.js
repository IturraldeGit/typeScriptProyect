"use strict";
(() => {
    let userId;
    userId = 12;
    userId = "sada";
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`String: ${myText.toLowerCase()}`);
        }
        else {
            console.log(`Number: ${myText.toFixed(2)}`);
        }
    }
    greeting(12);
    greeting("Hello World");
})();
