function temporary() {
  let counter = 0;

   return function (){
     counter += 1;
     return counter;
  }
  
};

// Call add() 3 times
const plus = temporary();
plus()
plus()
console.dir(plus);