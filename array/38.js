function move(arr, from, to){
  from = from < 0 ? arr.length + from : from;
  to = to < 0 ? arr.length + to : to;
  var save_elem = arr[from];

  arr.splice(from, 1);
  arr.splice(to, 0, save_elem);
  
  return arr;
}
