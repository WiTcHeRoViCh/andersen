function integers() {
  let i = 0
  return {next() { return {value: i++} },
          [Symbol.iterator]() { return this }}
}

function take(n, iter) {
  let k = 0;
  return {
    next() {
        iter;
    if (k == n){
          return {
            done: true
          }
        }
      else{
        return {
          done: false,
          value: k++
        }
      }
    },
    [Symbol.iterator]() { return this }
  }
}

for (let elt of take(3, integers()))
  console.log(elt)
// → 0
//   1
//   2
