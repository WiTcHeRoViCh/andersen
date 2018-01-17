function rand_item(arr){
  var rand_idx = Math.floor( Math.random() * (arr.length-1) );

  return arr[rand_idx];
}
