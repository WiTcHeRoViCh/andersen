function filter_array_values(arr){
  var result = [];

  for (var i = 0; i < arr.length; i++){
    if (arr[i]){
      result.push(arr[i]);
    }
  }
  return result;
}
