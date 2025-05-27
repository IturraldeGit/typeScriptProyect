"use strict";
(() => {
    // let myNumber: number = undefined;
    // let myString: string = null;
    // null and undefined are no infered as types but as any
    // let myNull = null;
    // let myUndefined = undefined;
    //  We can use null and undefined as types
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null;
    myNumber = 12;
    let myString = undefined;
    myString = "Hello";
    function hi(name) {
        let hello = `Hello ${name ? name : "stranger"}`;
        // let hello = name?.toLowerCase() || "stranger";
        console.log(hello);
    }
    hi("John");
    hi(null);
})();
