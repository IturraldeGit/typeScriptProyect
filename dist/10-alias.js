"use strict";
(() => {
    let userId;
    function greeting(userId) {
        if (typeof userId === 'string') {
            console.log(`Hello, user with ID: ${userId}`);
        }
    }
    let shirtSize;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    shirtSize = 'XXL';
    function greeting2(userId, shirtSize) {
        if (typeof userId === 'string') {
            console.log(`Hello, user with ID: ${userId} and shirt size: ${shirtSize}`);
        }
    }
    greeting2('Daniel', 'L');
})();
