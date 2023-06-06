var arr1 = [
  1,
  2,
  3,
  'hello',
  {
    name: 'Ayush',
    roll: 14,
  },
  [1, 2, 4],
]

const names = ['Ayush', 'John']

// console.log(arr1.length)
// console.log(arr1[16])

var firstElement = arr1[0]
var secondElement = arr1[1]

// Destructuring of arrays
// To extract elements and to store values to variables

// let [first, second, third, fourth] = numbers

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fourth)

// spread operator
// arr=[23,4,6]
// ...arr - 23,4,6

let numbers = [3, 34, 6, 3, 13, 5]
let [a, ...d] = numbers

// console.log(d)

let [x, , , z = 10] = numbers
console.log(z)
console.log((z = 10))
// console.log(y)
// console.log(x)
