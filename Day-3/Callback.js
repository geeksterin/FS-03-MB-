// What is a callback function?
// A function which is passed as a argument

function show(callbackFunc) {
  console.log('hello')
  callbackFunc()
}

function intro() {
  console.log('world')
}

// show(intro)

function add(help, a, b) {
  // help() is passed as a param
  const sum = help(a, b)
  console.log('a+b= ', sum)
}

const help = (arg1, arg2) => {
  return arg1 + arg2
}

add(help, 122, 13)
