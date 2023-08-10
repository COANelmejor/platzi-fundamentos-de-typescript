(()=>{
  let userId: number | string;
  userId = 10; // OK
  userId = '10'; // OK

  function greeting(user: number | string) {
    if (typeof user === 'string') {
      return `Welcome ${user.toUpperCase()}`;
    } else {
      return `Welcome user #${user.toExponential()}`;
    }
  }

  console.log(greeting(10)); // Welcome user #1e+1
  console.log(greeting('Camilo')); // Welcome CAMILO
})();
