class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }

  static from(date){
    if (date[Symbol.iterator]){
      let list;
      let result;

      for (value of date){
        if (list){
      list.tail = new List(value, null);
          list = list.tail
        }
        else{
          list = new List(value, null);
          result = list;
        }
      }

      return result;
    }
    else{
      let keys = Object.keys(date);
      let list;
      let result;

      for (let i = 0; i < keys.length; i++){
        if (list){
          list.tail = new List(date[keys[i]], null);
          list = list.tail;
        }
        else{
          list = new List(date[keys[i]], null);
          result = list;
        }
      }

      return result;
    }
  }
}

console.log(List.from([3,2,1]))
// → List{head: 3, tail: List{head: 2, tail: List{head: 1, tail: null}}}
