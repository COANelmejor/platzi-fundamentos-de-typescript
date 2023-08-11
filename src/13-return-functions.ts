(()=>{

  const calcTotal = (prices: number[]) : number => {
    let total = 0;
    prices.forEach(price => {
      total += price;
    })
    return total;
  }

  const result = calcTotal([1,2,3]); // 6
  console.log(result);

  const printTotal = (prices: number[]) : void => {
    let total = 0;
    prices.forEach(price => {
      total += price;
    })
    console.log(total);
    // return void 0; // Not necessary. Is not a common practice.
  }

  printTotal([1,2,3]); // 6

})();
