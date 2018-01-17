function sequence(num, step){
  num = num || 0;
  step = step || 1;

  return function(){
    var date = num;
    num+=step;
    return date;
  }
}