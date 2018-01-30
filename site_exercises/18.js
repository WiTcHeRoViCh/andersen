function replace(array, ...elements) {
  array.splice.apply(array, [].concat(...elements))
}

let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2,2 ,[ 3, 4, 5])
console.log(testArray)

function copyReplace(array, ...elements) {
  let arr = array.slice();
  arr.splice.apply(arr, [].concat(...elements));

  return arr
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 2, [3, 4, 5]))

let birdsSeen = []
function recordBirds(time, ...arg) {
  birdsSeen.push({time, birds: arg})
}

recordBirds(new Date, "sparrow", "robin", "pterodactyl")
console.log(birdsSeen)