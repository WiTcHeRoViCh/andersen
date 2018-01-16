function binarSearch(array, elem){
  var left = 0, right = array.length;

  while(true){
    var mid = Math.floor( (left+right)/2 );

    if (array[mid] < elem){
      left = mid;
    }
    else if (array[mid] > elem){
      right = mid;
    }
    else {
      return mid;
    }
  }
}
