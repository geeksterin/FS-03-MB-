// const sum = (a, b, c) => {
//   return a + b + c
// }

// const num = [1, 13, 56, 4]

// const res = sum.apply(null, num) // array of args

// const res2 = sum(12, 3)

// console.log(res)
// console.log(res2)

const array = ['a', 'b']
const elements = [0, 1, 2]
// array.push.apply(array, elements)
array.push(...elements)
console.info(array) // ["a", "b", 0, 1, 2]
