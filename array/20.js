function findDuplicate(arr){
  result = [];
  for (var i = 0; i < arr.length;i++){
    var cur_element = arr[i];
    for (var j = 0;j < arr.length;j++){
      if ( (i != j) && (cur_element == arr[j]) && (result.indexOf(arr[j]) == -1) ){
        result.push(cur_element);
      }
    }
  }
  return result;
}
