const person = {
  name: 'john',
  age: 30,
  city: 'nyc',
}

// const { name, age } = person
// console.log(name)
// console.log(age)

// function getObj() {
//   return {
//     name: 'john',
//     age: 30,
//     city: 'nyc',
//   }
// }

// const { name, age } = getObj()   // destructuring key should be same as object key

// console.log(name)

const { name: fullname, age: num } = person

console.log(fullname)

const obj = {}
const { prop = 'na' } = obj // default val to desc key
