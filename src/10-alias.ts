(()=>{
  type UserId = string | number | boolean;
  let userId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      console.log(`Hello, user with ID: ${userId}`);
    }
  }

  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'XXL';

  function greeting2 (userId: UserId, shirtSize: Sizes) {
    if (typeof userId === 'string') {
      console.log(`Hello, user with ID: ${userId} and shirt size: ${shirtSize}`);
    }
  }
  greeting2('Daniel', 'L');

})();
