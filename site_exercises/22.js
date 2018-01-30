class MyMap {
  constructor(){
    this.objs = {};
  }

  set(key, value){
    this.objs[key] = value;
  }

  get(key){
    return this.objs[key];
  }

  get size(){
    return Object.keys(this.objs).length;
  }

  delete(key) {
    delete this.objs[key];
  }
  clear(){
    this.objs = {};
  }
}

const names = new MyMap
names.set(Array, "the array constructor")
names.set(Math, "the math object")
console.log(names.get(Array))

// → "the array constructor"
console.log(names.size)
// → 2
names.delete(Array)
console.log(names.get(Array))
// → undefined
names.clear()
console.log(names.get(Math))
// → undefined
