function num_string_range(start, end, step){
  result = [];
  for (var i = start.charCodeAt(); i < end.charCodeAt();i+=step){
    result.push(String.fromCharCode(i))
  }
  return result;
}
