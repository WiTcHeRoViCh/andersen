gcd = function gcd(num1, num2){
  return !num2 ? num1 : gcd(num2, num2%num1)
}