// stringify -> changes the js object into JSON
// parse ->  reverse of stringfy
// decode and encode
// let json = JSON.stringify(obj)

// console.log(json)
// console.log(obj)

// let normalObj = JSON.parse(json)
// console.log(normalObj)
// js object notation -JSON

const obj = {
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

let valuesArray = Object.values(obj)

// console.log(valuesArray)

let entries = Object.entries(obj)
console.log(obj.hasOwnProperty('name1'))
