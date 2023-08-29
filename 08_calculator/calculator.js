const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let total = 0;
	numbers.forEach(element => {
    total += element;
  });
  
  return total;
};

const multiply = function(numbers) {
  let result = 1;
  numbers.forEach(element => {
    result *= element;
  });
  
  return result;
};

const power = function(num1, num2) {
	let result = 1;
  for(let i = 0; i < num2; i++) {
    result *= num1;
  }
  
  return result;
};

const factorial = function(num) {
	let result = 1;

  if (num == 0) {
    return 1;
  } else {
    for(let i = num; i > 0; i--) {
      result *= i;
    }
  }
  
  return result;
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
