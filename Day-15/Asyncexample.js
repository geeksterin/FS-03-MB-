const { log } = require('console')
const filesystem = require('fs')

// utf8 encoding format
filesystem.readFile('Topics.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('error')
    return
  }
  console.log('Content of file - ', data)
})
console.log('this is first op')

console.log('This is second operation   <<<<<<<<<<-')
