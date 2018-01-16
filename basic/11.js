function fromFtoC(fahrenheit){
  var C = (fahrenheit - 32)*5/9;
  return C;
}

function fromCtoF (celsium) {
  var F = (celsium*9)/5 + 32;
  return F
}

fromCtoF(0)  //32
fromFtoC(32) //0

