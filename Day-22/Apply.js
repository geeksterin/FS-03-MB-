const sum = (a, b) => {
  return a + b
}

const num = [1, 13, 56, 4]

const res = sum.apply(null, num) // array of args

console.log(res)
