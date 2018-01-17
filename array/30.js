function merge_array(arr1, arr2){
  var result = [];

  result = arr1.concat(arr2);
  return remove_duplicate(result)
}

function remove_duplicate(array) {
  var current_elem;

  for (var i = 0;i < array.length; i++){
    current_elem = array[i];
    for (var j = 0;j < array.length;j++){
      if ( (i != j) && (current_elem.toString().toLowerCase() == array[j].toString().toLowerCase()) ){
        array.splice(j, 1);
      }
    }
  }
  return array
}
