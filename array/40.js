function array_range(begin, end){
  var result = [];
  var start = begin;

  for (var i = 0;i < end;i++){
    result.push(start);
    start++;
  }
  return result;
}
