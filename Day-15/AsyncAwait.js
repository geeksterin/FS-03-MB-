async function fetch1() {
  try {
    const res = await fetch1(
      'https://my-json-server.typicode.com/typicode/demo/posts',
      {
        method: 'GET',
      }
    )
    const data = await res.json()
    console.log(data)
  } catch {
    console.log('errr')
  }
}

fetch1()
