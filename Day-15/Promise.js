const promiseObj = new Promise((resolve, reject) => {
  // async operation
  setTimeout(() => {
    const data = 'this is the async data'
    resolve(data)
  }, 2000)
})

const { error } = require('console')

const getData = () => {
  return new Promise((resolve, reject) => {
    // async operation
    setTimeout(() => {
      const data = 'this is the async data'
      // resolve(data)
      // reject(data)
    }, 2000)
  })
}

getData()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

console.log('hello')
