function nthlargest(arr, n){
  var result = 0;
  arr.length = n;

  result = Math.max.apply(null, arr);
  return result;
}
