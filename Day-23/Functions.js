// // Diff b/w the arrow head or normal function

// console.log(add(34, 6))
// console.log(sum(34, 6))

// function add(a, b) {
//   return a + b
// }

// const sum = (a, b) => {
//   return a + b
// }

// Binding of 'this' keyword it is applicable in function but not in arrowhead

const person1 = {
  name: 'Ayush',
  temp: function (a) {
    console.log(arguments)
    console.log('hello ' + this.name) // this refers to current obj
  },
}
const person2 = {
  name: 'Ayush',
  temp: (a) => {
    console.log(arguments)
    console.log('hello ' + this.name) // this refers to current obj
  },
}

person1.temp(23)
person2.temp(43)
