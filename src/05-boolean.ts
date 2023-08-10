(()=>{
  let isEnable = true;
  // isEnable = 'as'; // Type 'string' is not assignable to type 'boolean'
  // isEnable = 1; // Type 'number' is not assignable to type 'boolean'
  isEnable = false;
  console.log(isEnable);

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);

  // isNew = random >= 0.5 ? 'true' : 'false'; // Type 'string' is not assignable to type 'boolean'.
  // isNew = random >= 0.5 ? 'true' : false; // Type 'string | boolean' is not assignable to type 'boolean'.
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: boolean = true; // Work but is not recommended
})();
