const fibonacci = function(index) {
    if (index === 0 || index === 1) {
        return 1;
      }
      if (index < 0) {
        return "OOPS"
      }
      else {
       let a = 1;
      let b = 1;
        let myArray = [a, b];
    
      for (i = 2; i < index; i++){
        let nextNum = a + b;
        a = b;
        b = nextNum
        myArray.push(nextNum)
        }
      if (i = index) {
          return myArray.slice(-1)[0];
      }
      }
};




fibonacci(4);
// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// ```javascript
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8
// ```
// Do not edit below this line
module.exports = fibonacci;
