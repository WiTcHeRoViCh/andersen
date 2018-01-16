function getVectorSum(array) {
  var sum = 0;
  for (var i=0;i<array.length;i++){
    sum +=Math.pow(array[i],2)
  }
  return sum
}
