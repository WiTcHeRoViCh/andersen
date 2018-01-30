function detectCollision(objects, point) {

  let {x, y} = point;

  return objects.find((obj) => {
    return (x >= obj.x && x <= obj.x + obj.width && y >= obj.y && y <= obj.y + obj.height);
  })
}

const myObjects = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5}
]

console.log(detectCollision(myObjects, {x: 4, y: 2}))
