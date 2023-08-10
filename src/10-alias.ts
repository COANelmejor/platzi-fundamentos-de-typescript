(()=>{
  type UserId = number | string;
  let userId: UserId;

  // Literal Types
  // let shirtSize:  'S' | 'M' | 'L' | 'XL'; // Is the same as the next 2 lines
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;

  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'XS'; // Type '"XS"' is not assignable to type '"S" | "M" | "L" | "XL"'

  function greeting(userId: UserId, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`Welcome ${userId.toUpperCase()} - ${size}`);
    } else {
      console.log(`Welcome #${userId.toExponential()} - ${size}`);
    }
  }

  greeting('Camulo', 'S')
})();
