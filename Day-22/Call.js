// // call,apply,bind - > Methods in js that will allow us to manipulate the context and args

// const person1 = {
//   name: 'Ayush',
//   temp: function () {
//     console.log('hello ' + this.name + ' ' + this.age) // this refers to current obj
//   },
// }

// const person2 = {
//   name: 'John',
//   age: 23
// }

// const person3 = {
//  roll:1
// }

// person1.temp()
// person1.temp.call(person2) // use of anotther object  -> person2.temp()
// person1.temp.call()

// // Reference prev obj ->
function Product(name, price, expiry) {
  this.name = name
  this.price = price
  this.expiry = expiry
}

function Food(name, price, expiry) {
  Product.call(this, name, price, expiry)
  this.category = 'food'
}

console.log(new Food('cheese', 5, 10).expiry)
