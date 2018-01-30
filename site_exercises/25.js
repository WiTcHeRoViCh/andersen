let compose = Symbol("compose");
Function.prototype[compose] = function(method){
  let curMethod = this;

  return function(arg){
    return curMethod(method(arg))
  }
}

let roundedAbs = Math.round[compose](Math.abs)
console.log(roundedAbs(-5.5))
// → 6
