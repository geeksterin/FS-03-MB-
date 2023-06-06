//push and pop

// Push - > to add one or more elements to end of array and returns the length of new array

// let len = arr.push('hello')

// arr=[1,2,3,hello]
// console.log(len)
// console.log(arr)

//[1,2,3,hello,78,6,hello,5]
// arr.push(6, 'hello', arr.push(78))

//left -> right
// function call is happening before

// arr.push(71)

// console.log(arr)

const arr = [12, 212, 34, 4522, 612]

// some() and every()
// to check array  contains even number
// Check the occurences of elements in arrays

let evenNumber = arr.some((element) => element % 2 == 0)

let allEvenNumber = arr.every((element) => element % 2 == 0)
console.log(evenNumber)
console.log(allEvenNumber)
