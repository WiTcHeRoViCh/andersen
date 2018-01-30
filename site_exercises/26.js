let prop = Symbol.for("prop");

class Queue {
  constructor() {
    this[prop] = [];
  }
  put(elt) {
    return this[prop].push(elt)
  }
  take() {
    return this[prop].shift()
  }
}

let q = new Queue
q.put(1)
q.put(2)
console.log(q.take())
console.log(q.take())
