function filter(arr){
  var result = [];

  for (var i = 0;i < arr.length;i++){
    elem = arr[i];
    if (elem){
      result.push(arr[i]);
    }
  }
  return result;
}
