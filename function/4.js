function fmap(a, gen){
  return function (){
    return a(gen.apply(null, arguments));
  }
}

function sequence(num, step){
  num = num || 0;
  step = step || 1;

  return function(){
    var date = num;
    num+=step;
    return date;
  }
}

function add(){
  var arg = [].slice.call(arguments);
  var result = 0;
  for (var i = 0; i < arg.length; i++){
    result += arg[i];
  }
  return result;
}

function sqr(x){
  return x*x;
}

var gen = sequence();
var squareGen = fmap(sqr, gen);
var sadd = fmap(sqr, add);
