// setTimeout
// setInterval

const fetch = (callbackFunc) => {
  setTimeout(() => {
    const data = {
      name: 'John Wick',
      age: 34,
    }
    callbackFunc(data) // getData({name:..,age:...})
  }, 3000)
}

const getData = (processData) => {
  console.log(processData)
}

console.log('Fetch started !!!')

fetch(getData)

// console.log('Fetched the data')
