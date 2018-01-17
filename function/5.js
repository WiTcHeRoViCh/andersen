function partial(func){
  var arg = [].slice.apply(arguments);
  arg.splice(0, 1);

  return function(){
    var func_arg = [].slice.apply(arguments);
    return func.apply(null, arg.concat(func_arg));
  };
}

function add(){
  var arg = [].slice.call(arguments);
  var result = 0;
  for (var i = 0; i < arg.length; i++){
    result += arg[i];
  }
  return result;
}

var addXelem = partial(add, 1, 2, 3, 4,5);
