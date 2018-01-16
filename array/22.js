function union(arr1, arr2){
  var len = (arr1.length > arr2.length) ? arr1.length : arr2.length;
  var result = [];

  for (var i = 0; i < len;i++){
    if (result.indexOf(arr1[i]) == -1 && arr1[i]) {
      result.push(arr1[i]);
    }

    if (result.indexOf(arr2[i]) == -1 && arr2[i]){
      result.push(arr2[i]);
    }
  }
  var sort_result = result.sort(function(a, b){
    return a-b;
  });
  return sort_result;
}
