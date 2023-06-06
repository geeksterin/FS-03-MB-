//       ...-3 -2 -1

// console.log(str.slice(-5, -1))
// console.log(str.substring(-4, -1))

// If we have negative indexes in substring()
// It will be assumed as 0

// If starting index > ending index
// In both the cases -> indexes will be swapped

let str = 'hey! how are you?'

console.log(str.slice(4)) // 4-lastofChar
console.log(str.slice(4, 5)) // only 4th index char -  " "
console.log(str.substring(5, 4)) // only 4th index char - " "
console.log(str.slice(-4, -1)) // you
console.log(str.substring(-4, -1)) // ""
console.log(str.substring(4, -1)) // hey!
