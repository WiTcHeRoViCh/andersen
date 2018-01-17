range = function range(begin , end){
  var result = [begin+1];
  return end > begin ? result.concat(range(begin+1, end)) : [end-1];
}