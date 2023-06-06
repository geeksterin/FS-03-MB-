const btn1 = document.getElementById('btn1')
const para = document.getElementById('para')
const para2 = document.getElementsByClassName('para2')[0]
const main = document.querySelector('.main-event')
const input = document.querySelector('#textinput')

// const show = () => {
//   // innertext - overides the text content inside the element
//   para2.innerText = 'on click worked'
// }
// const over = () => {
//   para.innerText = 'on mouse over worked'
// }
// const out = () => {
//   para.innerText = 'on mouse out worked'
// }

// main.addEventListener('mouseout', show)
// keypress - > hit the keys
// keyup ->
// keydown
input.addEventListener('keydown', (event) => {
  para2.innerHTML = `keydown worked with <b>${event.key}</b>`
})
