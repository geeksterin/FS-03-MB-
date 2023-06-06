// var - function scoped and global scope
// - redeclared

// Function -  are the block of reusable code

function show() {
  console.log('helloo ...')
}

// Anonymous function (In js first class functions)

// const add = function (a, b) {
//   return a + b
// }

// console.log(add(12, 34))

// param. functions

// Arrow head function

const add = (a, b) => {
  return a + b
}

const result = add(4, 6)

console.log(result)
