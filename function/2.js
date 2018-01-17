function take(func, n){
  var result = [];

  for (var i = 0; i < n;i++){
    result.push(func());
  }
  return result;
}