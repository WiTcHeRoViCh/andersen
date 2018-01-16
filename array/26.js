function find_pair(arr, n){
  for (var i = 0;i < arr.length;i++){
    var elem = arr[i];
    for(var j = 0;j < arr.length;j++){
      if (elem + arr[j] == n){
        return console.log("First: "+i+" Second: "+j);
      }
    }
  }
}
