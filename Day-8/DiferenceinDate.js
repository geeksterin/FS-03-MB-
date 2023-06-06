const date1 = new Date('2023-05-13')
const date2 = new Date('2023-05-17')

// const ms = date2 - date1 // ms
// // 1 hr = 60 mins = 60*60*1000
// const days = Math.floor(ms / (60 * 60 * 1000 * 24))

const days = date2.getDate() - date1.getDate()

console.log(timeinMS)
