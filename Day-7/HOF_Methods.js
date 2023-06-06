// map , reduce , filter

// [1,9,36,..,16]

// const res = num.map((ele, ind) => {
//   console.log(ind, ele)
//   return ele * ele
// })

// const reduceRes = num.reduce((acc, current) => {
//   console.log(acc, '--->', current)
//   return acc + current
// }, 0)

// console.log(reduceRes)

const num = [1, 3, 6, 5, 4]
const filterRes = num.filter((num) => num % 2 == 0)

console.log(filterRes)

// - array or array of objects (JSON) related queries -> Map, filter , reduce
