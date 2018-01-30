const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

let totalMachineValue = inventory.filter((obj) => {return obj.type === "machine"}).map((obj) => {return obj.value}).reduce((prevV, curV) => {
  return prevV + curV;
})

console.log(totalMachineValue)