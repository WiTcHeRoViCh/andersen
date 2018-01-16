function sumAndProduct (array) {
  var result_s = 0;
  var result_p = 1;

  for (var i = 0; i < array.length; i++){
    result_s += array[i];
    result_p *= array[i];
  }  

  return "Sum: "+result_s+", Product: "+result_p
}

