class SortedArray{
  constructor(compare) {
    this.compare = compare
    this.content = []
  }

  findPos(elt){
    let i = this.content.findIndex((x) => this.compare(elt, x) < 0)

    return i == -1 ? this.content.length : i;
  }

  insert(elt){
    this.content.splice(this.findPos(elt), 0, elt)
  }
}

var sorted = new SortedArray(function(a, b) { return a - b })
sorted.insert(5)
sorted.insert(1)
sorted.insert(8)
sorted.insert(2)
sorted.insert(4)
sorted.insert(9)
sorted.insert(3)
sorted.insert(7)

console.log("array:", sorted.content)
