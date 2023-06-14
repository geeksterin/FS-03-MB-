const url = 'https://my-json-server.typicode.com/typicode/demo/posts'
const fetchData = (url) => {
  // This is function
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error('req fail')
      }

      const obj = res.json()
      //   console.log(obj)
      return obj
    })
    .catch((err) => {
      console.log(err)
    })
}

// console.log(fetchData())
fetchData().then((data) => {
  data[0]['review'] = 'Hello'
  console.log(data[0])
})

// fetch('https://my-json-server.typicode.com/typicode/demo/posts')
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('req fail')
//     }

//     const obj = res.json()
//     //   console.log(obj)
//     return obj
//   })
//   .then((data) => {
//     data[0]['review'] = 'Hello'
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
