const createCounter = () => {
  var c = 0

  const increment = () => {
    c++
    console.log(c)
  }

  return increment
}

let counter = createCounter()

counter()
counter()
counter()
