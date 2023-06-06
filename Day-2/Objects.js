// object is a datatype in JS -> Map in java
// key-value pair

// const obj = {}

// obj.name = 'Ayush'
// obj.age = 25
// obj.techstack = ['Java', 'C++', 'Python', 'JS']

// console.log(obj)

// accessing values from obj - dot operator
// - square brackets
// let arr = obj['techstack']
// console.log(arr)

// obj['age'] = 34
// console.log(obj)

// nested objects

const nestedObj = {
  name: 'John',
  email: 'john@gmail.com',
  techstack: {
    java: 'level3',
    python: 'level2',
    cplus: 'level5',
    js: {
      nodejs: 'level3',
      epressjs: 'level6',
      reactjs: 'level5',
    },
  },
}
let techObj = nestedObj.techstack
let jsObj = techObj.js
console.log(jsObj.epressjs)
