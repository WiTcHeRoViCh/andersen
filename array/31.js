function remove_array_element(arr, elem){
  var idx = arr.indexOf(elem);

  if (idx != -1){
    arr.splice(idx, 1);
  }
  else {
    return (elem +" not find in this array!");
  }
  return arr
}
