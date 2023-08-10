(()=>{
  let prices = [10, 20, 30, 40, 50, 60];
  prices.push(70); // Ok
  // prices.push("80"); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

  let prices2  = [10, 20, '30', 40, 50, '60'];
  prices2.push(70); // Ok
  prices2.push('80'); // Ok

  let dataNumbers: number[] = [10, 20, 30]; // Only can get numbers
  dataNumbers.push(40); // Ok
  // data.push('50'); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

  let dataMixed: (number | string | boolean)[] = [10, 20, 30]; // Can get numbers, strings and booleans
  dataMixed.push('40'); // Ok
  dataMixed.push(true); // Ok

  let numbers = [10, 20, 30, 40, 50, 60];
  numbers.map(item => item * 2); // Ok. You can use type number methods


})();
