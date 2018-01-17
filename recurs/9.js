qSort = function qSort(arr, begin, end){
  begin = begin || 0;
  end = end || arr.length-1;

  if (arr.length > 1){
    var idx = sort(arr, begin, end);

    if (begin < idx-1){
      qSort(arr, begin, idx-1);
    }

    if (end > idx){  
      qSort(arr, idx, end);
    }
  }
  return arr;
}

function sort(arr, begin, end){
  var elem = arr[Math.floor((end + begin) / 2)];
  var i = begin;
  var j = end;

  while(i <= j){
    while(arr[i] < elem) {i++;}
    while(arr[j] > elem) {j--;}
    if (i <= j){
      var save_elem = arr[i];
      arr[i] = arr[j];
      arr[j] = save_elem;
      i++;
      j--;
    }
  }
  return i;
}
