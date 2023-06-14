// const { log } = require("console")

const fetchData = async () => {
  try {
    const res = await fetch(
      'https://my-json-server.typicode.com/typicode/demo/posts'
    )

    // if (!res.ok) {
    //   throw new Error('Request failed')
    // }
    // const data = res.json() // parsing of promise
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

const getData = async () => {
  const data = await fetchData() // user-defined async function
  console.log(data[0])
}

getData()
