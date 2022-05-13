const add = function(int1, int2) {
	return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  else {
	return arr.reduce((previousValue, currentValue) => previousValue + currentValue)}
};

const multiply = function(arr) {

return arr.reduce((previousValue, currentValue)=> previousValue * currentValue);

};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};


const factorial = function(num) {

if (num === 0 || num === 1) {
  return 1;
}

else {
  for (i=num-1; i>=1; i--) {
    num *= i;
  }
  return num;}
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
