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
localStorage.setItem('skills', skillJSON)
// to store the array or obj
const strObj = JSON.stringify(obj) // string

const addToLocalStorage = () => {
  localStorage.setItem('firstname', 'Ayush')
  localStorage.setItem('lastname', 'Singh')
  localStorage.setItem('age', 25)
  localStorage.setItem('obj', obj)
  localStorage.setItem('strobj', strObj)
}

const removeItemLocal = () => {
  //   localStorage.removeItem('firstname')
  //   localStorage.removeItem('lastname')
  //   localStorage.removeItem('age')
  //   localStorage.removeItem('obj')
  localStorage.clear()
}

const getData = () => {
  firstname = localStorage.getItem('firstname')
  lastname = localStorage.getItem('lastname')
  age = localStorage.getItem('age')

  obj1 = localStorage.getItem('obj') // not valid obj value

  strobj1 = localStorage.getItem('strobj') // not valid obj

  const objParsed = JSON.parse(strobj1) // valid obj

  console.log(firstname, ' ', lastname, ' ', age)
  console.log(typeof strobj1, ' -> ', strObj)
  console.log(strobj1.age)
  console.log(typeof objParsed, ' ->', objParsed)
  console.log(objParsed.age)
}

document.getElementById('btn').addEventListener('click', addToLocalStorage)
document.getElementById('remove').addEventListener('click', removeItemLocal)
document.getElementById('get').addEventListener('click', getData)
