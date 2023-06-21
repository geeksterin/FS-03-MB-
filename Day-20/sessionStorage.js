const obj = {
  firstname: 'John',
  age: 23,
}
let skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 },
]

let skillJSON = JSON.stringify(skills)
// sessionStorage.setItem('skills', skillJSON)
// to store the array or obj
const strObj = JSON.stringify(obj) // string

const addTosessionStorage = () => {
  sessionStorage.setItem('firstname', 'Ayush')
  sessionStorage.setItem('lastname', 'Singh')
  sessionStorage.setItem('age', 25)
  sessionStorage.setItem('obj', obj)
  sessionStorage.setItem('strobj', strObj)
}

const removeItemLocal = () => {
  //   sessionStorage.removeItem('firstname')
  //   sessionStorage.removeItem('lastname')
  //   sessionStorage.removeItem('age')
  //   sessionStorage.removeItem('obj')
  sessionStorage.clear()
}

const getData = () => {
  firstname = sessionStorage.getItem('firstname')
  lastname = sessionStorage.getItem('lastname')
  age = sessionStorage.getItem('age')

  obj1 = sessionStorage.getItem('obj') // not valid obj value

  strobj1 = sessionStorage.getItem('strobj') // not valid obj

  const objParsed = JSON.parse(strobj1) // valid obj

  console.log(firstname, ' ', lastname, ' ', age)
  console.log(typeof strobj1, ' -> ', strObj)
  console.log(strobj1.age)
  console.log(typeof objParsed, ' ->', objParsed)
  console.log(objParsed.age)
}

document.getElementById('btn').addEventListener('click', addTosessionStorage)
document.getElementById('remove').addEventListener('click', removeItemLocal)
document.getElementById('get').addEventListener('click', getData)
