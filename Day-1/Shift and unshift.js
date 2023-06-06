//Shift and unshift

// shift is opposite of pop
// Removes the first element and returns it  - shift
// Unshift

let numbers = [1, 2, 4, 55, 6]
let names = ['ayush', 'john']
let length = numbers.unshift(12, 342, ...names)

console.log(numbers)
// console.log(length, '<------')

let removedElement = numbers.shift()

console.log(removedElement)

// shift and pop returns removed element
// unshift and push returns the new length of array
