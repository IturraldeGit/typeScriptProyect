"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 10;
    myDynamicVar = "Hello World";
    myDynamicVar = true;
    myDynamicVar = { name: "John" };
    myDynamicVar = 'Hola';
    const rta = myDynamicVar.toLowerCase();
    let test = myDynamicVar.toLowerCase();
    console.log(rta);
    console.log(myDynamicVar);
    console.log(test);
    myDynamicVar = 1212;
    const rta2 = myDynamicVar.toFixed(2);
    console.log(rta2);
})();
