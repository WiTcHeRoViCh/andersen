function MyPromiseF(func){
  this._status = "pending";
  this._result = null;
  this._error_message = null;
  this._checkIfFinish = false;
  this._func = func;

  this._onFulField = [];
  this._onError = [];

  var that = this;

  that._resolve = function(f_result){
    that._status = "fulfilled";
    that._result = f_result;

    that._onFulField.forEach(function(fn){
      that._result = fn(that._result);
    })

  };
  that._reject = function(f_error_message){
    that._status = "rejected";
    that._error_message = f_error_message;

    that._onError.forEach(function(fn_e){
      that._error_message = fn_e(that._error_message);
    })
  }

  that.then = function(success, error){
    success ? that._onFulField.push(success) : null;
    error ? that._onError.push(error) : null;
    return that;
  }

 that._func(that._resolve, that._reject);
 return that
}

new MyPromiseF((res, rej) => setTimeout(() => res("data"), 5000))
  .then((res) => {alert("res "+res)}, (rej) => {alert("rej "+rej);throw new Error()})
  .then(null, (e) => {alert("rej "+e);return "good"}).then((res) => alert("res b "+res))
  .then(()=>alert("res finish")).then(()=>{alert("res finish 1");throw new Error()})
  .then(null, (e)=>{alert("last error "+e)})



function MyPromiseP(func) {
  this._status = "pending";
  this._result = null;
  this._error_message = null;
  this._checkIfFinish = false;
  this._func = func;

  this._onFulField = [];
  this._onError = [];

  this._func(this.resolve(this), this.reject(this))
  return this;
}

MyPromiseP.prototype.then = function(success, error){
  success ? this._onFulField.push(success) : null;
  error ? this._onError.push(error) : null;
  return this;
};

MyPromiseP.prototype.resolve = function (that){
  return function(f_result){
    that._status = "fulfilled";
    that._result = f_result;

    that._onFulField.forEach(function(fn){
      that._result = fn(that._result);
    })
  }
}

MyPromiseP.prototype.reject = function (that){
  return function (f_error_message){
    that._status = "fulfilled";
    that._error_message = f_error_message;

    that._onError.forEach(function(fn){
      that._error_message = fn(that._error_message);
    })
  }
}


new MyPromiseP((res, rej) => setTimeout(() => res("data"), 5000))
  .then((res) => {alert("res "+res)}, (rej) => {alert("rej "+rej);throw new Error()})
  .then(null, (e) => {alert("rej "+e);return "good"}).then((res) => alert("res b "+res))
  .then(()=>alert("res finish")).then(()=>{alert("res finish 1");throw new Error()})
  .then(null, (e)=>{alert("last error "+e)})
