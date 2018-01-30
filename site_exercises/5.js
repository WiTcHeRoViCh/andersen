function startNode(type, value, options) {
  return {type, value, [options.sourceProperty]: options.sourceValue}
}

console.log(startNode("Identifier", "foo", {
  sourceProperty: "src",
  sourceValue: "bar.js"
}))
