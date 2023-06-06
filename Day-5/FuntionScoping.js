// var is function scoped
// let and const are block scoped

// Falsy values - false , 0 , '' , null, undefined
// True - true , ......
let num;
var message;//
const var1;

// Hoisting
function fun1() {
  var message = 'hello'

  if ('') {
    console.log(message)
  } else {
    console.log('Didnt worked!')
  }
}

// fun1()

function outer() {
  const var1 = 24

  function inner() {
    let var2 = 'Inside the function'

    console.log(var1)
    console.log(var2)
  }
  if (var1 > 18) {
    let var3 = 'Using a var'
  } else {
    let var3 = 'Still using a var'
  }

  console.log(var3)

  inner()
}

outer()

// any variables declared inside a function cant be accessible outside the function
