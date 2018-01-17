exponent = function exponent (num, exp){
  return (exp == 1) ? num : num*exponent(num, exp-1);
}