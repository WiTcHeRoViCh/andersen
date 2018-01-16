function difference(arr1, arr2){
  arr1 = flatten(arr1);
  arr2 = flatten(arr2);
  var len = (arr1.length > arr2.length) ? arr1.length : arr2.length;
  var result = [];

  for (var i = 0; i < len;i++){
    if ( result.indexOf(arr1[i]) == -1 && arr1[i] ){
      result.push(arr1[i])
    }
    else if (result.indexOf(arr1[i]) != -1 && arr1[i]){
      result.splice(result.indexOf(arr1[i]), 1);
    }

    if ( result.indexOf(arr2[i]) == -1 && arr2[i] ){
      result.push(arr2[i])
    }
    else if (result.indexOf(arr2[i]) != -1 && arr1[i]){
      result.splice(result.indexOf(arr2[i]), 1);
    }
  }
  var sort_result = result.sort(function(a, b){
    return a-b;
  });
  return sort_result;
}

function flatten (arr, shallow, result){
  result = result || [];

  if (shallow){
    return [].concat.apply([], arr)
  }

  for (var i = 0; i < arr.length;i++){
    if (!!arr[i].splice){
      flatten(arr[i], shallow, result)
    }
    else {
      result.push(arr[i])
    }
  }
  return result;
}
