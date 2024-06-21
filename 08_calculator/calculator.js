const add = (x,y)=>x+y;

const subtract = (x,y)=>x-y;

const sum = function(elements) {
  let sum=0;

  for(num of elements) sum+=num;

  return sum;
};

const multiply = function(elements) {
  let prod=1;
  for(num of elements) prod*=num;
  return prod;
};

const power = function(base, exp) {
  if(!exp || base==1) return 1;

  if(exp>1)return base*power(base,exp-1)
  else return base;
};

const factorial = function(num) {

	if(num>1) return num*factorial(num-1);
  else return num || 1;
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
