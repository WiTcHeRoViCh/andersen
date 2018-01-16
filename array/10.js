function print_array(arr){
  var elem;
  for (i = 0; i < arr.length; i++){
    console.log("Row "+i)
    elem = arr[i];
    
    for (j = 0;j < elem.length;j++){
      console.log(elem[j])
    }
  }
}

