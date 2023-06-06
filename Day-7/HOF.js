// // HOF - Passing a function as a argument or returning a function

function fun1() {
  // HOF
  return function (a, b) {
    return a * b
  }
}
// Anonymous function / expression
const res = fun1()

// // res = function(a,b){ return a*b}

// const ans = res(12, 13)

console.log(res)

// function applyOperation(numbers, operation) {
//   let results = []
//   for (let num of numbers) {
//     results.push(operation(num))
//     // results.push(1*1=1)
//     // results.push(2*2=4)....
//   }
//   return results
// }

// let numbers = [1, 2, 3, 4, 5]

// let squareNumbers = applyOperation(numbers, function (num) {
//   return num * num
// })

// console.log(squareNumbers) // Output: [1, 4, 9, 16, 25]
