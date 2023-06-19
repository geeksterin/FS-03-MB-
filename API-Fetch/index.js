// const options = {
//   method: 'GET',
//   url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
//   headers: {
//     'X-RapidAPI-Key': '5a9ef4c610mshbb0cf3df1b78af8p1aaf2djsn0d7b155b5c0a',
//     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
//   },
// }

// const fetch = async () => {
//   const data = await fetch(options)
//   const res = await data.json()
//   console.log(res)
// }

// fetch()

// try {
//   const response = await axios.request(options)
//   console.log(response.data)
// } catch (error) {
//   console.error(error)
// }

const url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5a9ef4c610mshbb0cf3df1b78af8p1aaf2djsn0d7b155b5c0a',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
}

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
