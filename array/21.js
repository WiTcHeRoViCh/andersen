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
