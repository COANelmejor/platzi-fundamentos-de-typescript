(() => {
  // let myNumber: number; // Can't be null or undefined
  // let myString: string; // Can't be null or undefined

  // let myNumber = null; // myNumber: any
  // let myString = undefined; // myString: any

  let myNull: null = null; // myNull: null
  let myUndefined: undefined = undefined; // myUndefined: undefined

  // let myNumber: number | null = null; // myNumber: number | null
  // let myString: string | undefined = undefined; // myString: string | undefined

  let myNumber: number | null = null;
  myNumber = 10;
  console.log(myNumber);
  myNumber = null;
  console.log(myNumber);

  function hi(name: string | null): void {
    let hello = 'Hello, ';
    if (name) {
      hello += name;
    } else {
      hello += 'World';
    }
    console.log(hello);
  }

  hi('John');
  hi(null);
  // hi(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'string | null'.ts(2345)
  // hi(); // Expected 1 arguments, but got 0.ts(2554)

  function hi_v2(name: string | null): void {
    let hello = 'Hello, ';
    hello += name?.toLocaleUpperCase() || 'World';
    console.log(hello);
  }

  hi_v2('John');
  hi_v2(null);

})();
