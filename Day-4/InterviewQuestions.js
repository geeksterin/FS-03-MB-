// create a function that takes an array of numbers and returns a new array with all odd numbers.
// Use anonymous function to filter the array

function getOddNumbers(arr) {
  const resarr = arr.filter((e) => e % 2 === 1)
  return resarr
}

const num = [1, 24, 5, 6, 64, 567]
const num2 = [11, 241, 5, 6, 64, 567]

const res = getOddNumbers(num2)
console.log(res)

// create a function that takes a string and return a new string with only vowels
// use callback function

var str = 'hello world'
//O/P : eoo
