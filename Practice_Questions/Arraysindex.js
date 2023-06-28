// In array of numbers return the array which will have the product of index and elements
//  if element is even otherwise return element

// arr = [12,43,4,341,323,45,56,3434,34]
const axios = require('axios')

const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/list',
  headers: {
    'X-RapidAPI-Key': '5a9ef4c610mshbb0cf3df1b78af8p1aaf2djsn0d7b155b5c0a',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
  },
}

try {
  async function add() {
    const response = await axios.request(options)
    console.log(response.data)
  }
  add()
} catch (error) {
  console.error(error)
}
