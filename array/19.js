function sumTwoArray(arr1, arr2){
  result = [];
  var len = (arr1.length > arr2.length) ? arr1.length : arr2.length; 
  for (var i = 0; i < len; i++){
    var val1 = arr1[i] || 0;
    var val2 = arr2[i] || 0;
    result[i] = val1 + val2;
  }
  return result;
}
