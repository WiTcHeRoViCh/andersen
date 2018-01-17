function rangeBetwee(begin, end){
  var result = [];
  var i = 0;

  while (begin <= end){
    result[i] = begin;
    begin++;
    i++;
  }
  return result;
}
