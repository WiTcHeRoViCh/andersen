function longest_common_starting_substring(arr){
  var result = "";

  for (var i = 1; i < arr.length;i++){
    var cur_elem = arr[i];
    var prev_elem = arr[i-1];
    var same = "";

    top:
    for (var j = 0; j < cur_elem.length+1;j++){
      if (cur_elem[j] == prev_elem[j]){
        same += cur_elem[j];
      }
      else{
        if (j == 0) return "";
        if (result){
          if (result > same){
            result = same;
          }
        }
        else {
          result = same;
        }
      break top;
      }
    }
  }
  return result;
}
