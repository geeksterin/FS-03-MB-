// It is technique to execute the async operations in sequencial manner
// Promises chaining (mul)

const fetchData = () => {
  // This is function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Data from API'
      //   resolve(data)
      reject('error')
    }, 3000)
  })
}

const processData = (data) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      const dataProcessed = data + ' Another data'
      //   resolve(dataProcessed)
      rej(data)
    }, 1500)
  })
}

const display = (data) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      console.log(data)
      resolve()
    }, 1100)
  })
}

fetchData()
  .then(processData)
  .then(display)
  .catch((err) => {
    console.log(err)
  })
