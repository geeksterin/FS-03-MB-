// const outer = document.querySelector('.outer')
// const inner = document.querySelector('.inner')
// const body = document.body
// outer.addEventListener('click', () => {
//   console.log('Outer div is clicked')
// })

// inner.addEventListener('click', () => {
//   console.log('Inner div is clicked')
// })
// body.addEventListener('click', () => {
//   console.log('Body is clicked')
// })

const outerList = document.getElementById('outerList')
const innerList = document.getElementById('innerList')

outerList.addEventListener('click', (event) => {
  console.log('Clicked ->', event.target.textContent)
  console.log('Outer clicked')
})
innerList.addEventListener('click', (event) => {
  console.log('Clicked ->', event.target.textContent)
  console.log('Inner clicked')
  event.stopPropagation()
})
