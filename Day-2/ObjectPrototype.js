// In js every objects has a prototype
// It is used in inheritance
// var name=

const person = {
  intro: function () {
    console.log(`hello , ${this.age}`)
  },
  age: 25,
}
// keys  have function() as value

const person2 = Object.create(person) // person2 inherits the property(keys) of person
// we dont want to repeat code
const person3 = Object.assign({ name: 'Ashish' }, person) // copy all properties to person3 from person obj

console.log(person2)
console.log(person3)

person2.name = 'Ayush'
console.log(person2)
// console.log(person2.age)
// person2.name = 'John'

// person2.intro()
// console.log(person2.age)
// this keyword -> refer to current object
