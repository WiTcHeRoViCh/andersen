Array.prototype.b_search = function(elem){
  var arr = this;
  var half = parseInt(arr.length/2);

  if (elem == arr[half]) return half;

  if (elem > arr[half]){
    return half + arr.slice(half, arr.length).b_search(elem);
  }
  else{
    return arr.slice(0, half).b_search(elem);
  }
}