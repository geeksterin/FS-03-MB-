// 1. // we have an array of numbers , design a method in which it takes the array
//  and remove the duplicates and return new array (Only use HOF)

//  arr = [1,2,3,3,2,1,3]
// [1,1,2,2,3,3,3]
//  o/p = [1,2,3]  //order doesnt matter

//   1// bruteforce using for loop (sort)
//   2// only you can use filter,map,reduce,arrays methods (not sort)

const removeDuplicates = (arr) => {
  return arr.filter(
    (current_element, index) => arr.indexOf(current_element) === index
  )
}

const obj = {}

const arr = [1, 2, 3, 3, 2, 1, 3]

arr.forEach((e) => {
  obj[e] = 1
})
// console.log(removeDuplicates(arr))
console.log(Object.keys(obj))

// for (let i of arr) {
//   console.log(arr.indexOf(i))
// }
