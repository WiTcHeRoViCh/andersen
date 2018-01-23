function MyPromiseF(func){
  var status = "pending";
  var result = null;
  var error_message = null;
  var checkIfFinish = false;
  this.func = func;

  var onFulField = [];
  var onError = [];

  var resolve = function(f_result, i){
    var i = i || 0;
    status = "fulfilled";
    result = f_result;

    for (var j = i; j < onFulField.length;j++){
      func = onFulField[j];
      if (checkIfFinish) break;
      try {
        if (i >= onFulField.length) {
          checkIfFinish = true;
          break;
        }
        if (func){
          result = func(result);
        }
        i++;
      }
      catch(e){
        i++;
        reject(e, i);
      }
    }

  };
  var reject = function(f_error_message, i){
    var i = i || 0;
    status = "rejected";
    error_message = f_error_message;

    for (var j = i; j < onError.length; j++){
      func = onError[j];
      if (checkIfFinish) break;
      try{
        if (i >= onError.length) {
          checkIfFinish = true;
          break;
        }
        if (func) {
          error_message = func(error_message);
          i++;
          resolve(error_message, i);
        }
        i++;
      }
      catch(e){
        i++;
        reject(e, i);
      }
    }
  }



  this.func.then = function(success, error){
    success ? onFulField.push(success) : onFulField.push(null);
    error ? onError.push(error) : onError.push(null);
    return func;
  }

 this.func(resolve, reject);
 return this.func;
}

new MyPromiseF((res, rej) => setTimeout(() => res("data"), 5000))
  .then((res) => {alert("res "+res)}, (rej) => {alert("rej "+rej);throw new Error()})
  .then(null, (e) => {alert("rej "+e);return "good"}).then((res) => alert("res b "+res))
  .then(()=>alert("res finish")).then(()=>{alert("res finish 1");throw new Error()})
  .then(null, (e)=>{alert("last error "+e)})



function MyPromiseP(func) {
  return MyPromiseP.prototype(func);
}

MyPromiseP.prototype = MyPromiseF;

new MyPromiseP((res, rej) => setTimeout(() => res("data"), 5000))
  .then((res) => {alert("res "+res)}, (rej) => {alert("rej "+rej);throw new Error()})
  .then(null, (e) => {alert("rej "+e);return "good"}).then((res) => alert("res b "+res))
  .then(()=>alert("res finish")).then(()=>{alert("res finish 1");throw new Error()})
  .then(null, (e)=>{alert("last error "+e)})
