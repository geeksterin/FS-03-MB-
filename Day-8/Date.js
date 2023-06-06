// work with date and time

// Date()

const currentDate = new Date() // GMT format
// console.log(currentDate

// Getters

const year = currentDate.getFullYear()
const month = currentDate.getMonth() // 0-11
const date = currentDate.getDate()
const hr = currentDate.getHours()
const mins = currentDate.getMinutes()
// // 0-11  {0: jan , ... , 11:dec}

// console.log(hr, mins)

// const copy = currentDate
// copy.setDate(5)
// copy.setMonth(5)

// console.log(copy)

// console.log('year = ', year)
// console.log('month = ', month)
// console.log('date = ', date)
// console.log('hrs = ', hr)
// console.log('mins = ', mins)

// currentDate.setFullYear(2024)
// currentDate.setMonth(11) // 0-11

const currentDateIST = currentDate.toLocaleString('en-US', {
  timeZone: 'Asia/Kolkata',
})
const currentDateUS = currentDate.toLocaleString('en-US', {
  timeZone: 'America/Los_Angeles',
})

console.log(currentDate)
console.log(currentDateIST)
console.log(currentDateUS)
