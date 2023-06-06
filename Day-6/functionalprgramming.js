// Functional programming
// - use of pure functions
// - concise code
// - code readibility
// - function should be genric

// forEach

// function show(arr) {
//   for (let i = 0; i < 10; i++) {
//     console.log(arr[i])
//   }
// }

arr = [32, 3, 672, 4, 3, 5]
// show(arr)

// function show(arr) {
//   arr.forEach((element) => console.log(element))
// }

// const print =
let evenArr = []
arr.forEach((ele, ind, arr) => {
  ele % 2 === 0 ? evenArr.push(ele) : ''
})
console.log(evenArr)
