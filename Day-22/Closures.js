//basic closure
const outerFunction = () => {
  // global var for inner function
  let outer = 'this is from outer function'

  const innerFunction = () => {
    console.log(outer)
  }
  return innerFunction
}

var closure = outerFunction() //

closure()

// closure is  a function
