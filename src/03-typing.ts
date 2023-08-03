let myProductName = 'Product 1';  // string type infered by TypeScript
let myProductPrice = 100;         // number type infered by TypeScript

// myProductName = 50;        // Error: Type '50' is not assignable to type 'string'
myProductName = 'Product 2';  // OK
myProductName.toLowerCase();  // OK. Method toLowerCase() exists for strings

// myProductPrice = 'Product 2';  // Error: Type '"Product 2"' is not assignable to type 'number'
myProductPrice = 200;             // OK
myProductPrice.toFixed(2);        // OK. Method toFixed() exists for numbers

const myProductStock = 1000;  // number type infered by TypeScript. Type is fixed to be 1000 as a number
// myProductStock = 2000;     // Error: Cannot assign to 'myProductStock' because it is a constant

const myProductName2 = 'Product 2'; // string type infered by TypeScript

const myProductPrice2 : number = 100; // number type declared by the developer
// myProductPrice2 = 'Product 2';     // Error: Type '"Product 2"' is not assignable to type 'number'
