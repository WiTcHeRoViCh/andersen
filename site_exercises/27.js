class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }

  [Symbol.iterator](){
  let list = this;

    return {
      next(){
        if (!list.hasOwnProperty("tail")){
          return {
            done: true,
          }
        }
        else{
          let head = list.head;
          list = list.tail;
          return {
            done: false,
            value: head
          }
        }
      }
    }
  }
}

let list = new List("x", new List("y", new List("z", null)))

for (let elt of list) console.log(elt)
// → x
//   y
//   z
