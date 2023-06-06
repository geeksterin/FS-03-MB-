// Slice - To extract the portion of array  from start index (inclusive) and till end index(exclusive)and returns a new array

// let temp = numbers.slice(0, 4) // 0,1,2,3

// console.log(temp)
// console.log(numbers)

// Splice - It used to change the contents of array
// by removing, or add
//returns the array

// .splice(startIndex,number of elements to be removed)
let numbers = [1, 2, 4, 56, 57]
let spliceElement = numbers.splice(1, 3)

// console.log(spliceElement)
// console.log(numbers)

// shallow copy vs deep copy

var originalArray = [{ name: 'Ayush' }, { name: 'john' }]

var copyArr = [...originalArray] // shallow copy

copyArr[0].name = 'Tom'

console.log(copyArr)
console.log(originalArray, '<-- original array')
