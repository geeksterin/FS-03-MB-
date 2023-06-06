// // callback - when a function is passed as argument to another function

// // const greet = (str, a) => {
// //   a(str) // show('example')
// // }

// // const show = (str) => {
// //   console.log(`this is ${str}`)
// // }

// // greet('example', show)

// const help = (arg1, arg2) => {
//   return arg1 + arg2
// }

// function add(temp, a, b) {
//   const sum = temp(a, b)
//   console.log('a+b= ', sum)
// }

// add(help, 145, 'hello')

const operation = (a, b, c) => {
  // HPF
  return c(a, b)
}

const add = (a, b) => {
  return a + b
}

const res = operation(1, 3, add)
console.log(res)
