const brain = require("brain.js")

const network = new brain.NeuralNetwork()

network.train([
  {input:{height: 60, weight: 150}, output:{adult: 1}},
  {input:{height: 70, weight: 160}, output:{adult: 1}},
  {input:{height: 30, weight: 60}, output:{adult: 0}}
])

const result = network.run({height: 70, weight: 170})

console.log(result);
