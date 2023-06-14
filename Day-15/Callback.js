const getData = (callbackFunction) => {
  // async operation
  setTimeout(() => {
    const data = 'this is the async data by a callback'
    callbackFunction(null, data)
  }, 2000)
}
getData((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
