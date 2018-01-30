class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }
  [Symbol.iterator](){
    let gen = generator(this);

    return gen;
  }
}

function *generator(list){
  while(true){
    yield list.head;

    if (list.tail === null) break
    list = list.tail;
  }
  return true;
}

let list = new List("x", new List("y", new List("z", null)))

for (let elt of list) console.log(elt)
// → x
//   y
//   z
