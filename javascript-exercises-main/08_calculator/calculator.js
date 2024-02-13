const add = function(num1, num2) {
// 2 numbers for this function	
return num1 + num2;
};

const subtract = function(num1, num2) {
// 2 numbers for this one too
return num1 - num2;
};

const sum = function(numarray) {
// take in an array
let sum = 0;
for (let i = 0; i < numarray.length; i++){
  sum += numarray[i];
}
return sum;
};

const multiply = function(numarray) {
// take in an array
let product = 1;
for (let i = 0; i < numarray.length; i++){
  product = product * numarray[i];
}
return product;
};

const power = function(base, exponent) {
// 2 numbers for this function	
return base ** exponent;
};

const factorial = function(num) {
// Take in one number
  let product = 1;  
  if (num == 0){ 
    return product
  } else {
      for (let i = 1; i <= num; i++){
        product = product * i;
    }
  }
  return product
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
