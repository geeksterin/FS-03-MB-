const arr = [
  { a: 12, b: 2341 },
  { a: 23, b: 567 },
  { a: 1, b: 4599 },
]

const sortedArr = arr.sort((obj1, obj2) => obj1['b'] - obj2['b'])
// const descArr = arr2.sort((a, b) => b - a)

//(a, b) => a - b - ascending order
// (b,a ) => a-b - descending order
// (a,b ) => b-a - descending order

console.log(sortedArr)
// console.log(descArr)
