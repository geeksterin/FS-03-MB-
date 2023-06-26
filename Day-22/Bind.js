const module1 = {
  // obj
  x: 43,
  getVal: function (a, b) {
    return a + b + this.x
  },
}

const valOfX = module1.getVal // function

// const valOfX1 = module.getVal()  // valofx = 43

// 1 ?? valOfX  =function

console.log(valOfX(1, 2))

const bindvalofX = valOfX.bind(module1, ...[1, 2]) // call + apply

console.log(bindvalofX())

// 2??
