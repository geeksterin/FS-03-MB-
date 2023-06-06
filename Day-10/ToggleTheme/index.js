const btn = document.getElementById('theme')
const btn2 = document.getElementById('submit')
const body = document.body // body

btn.addEventListener('click', () => {
  var arr = body.classList

  if (arr.contains('dark-theme')) {
    body.classList.remove('dark-theme')
  } else {
    body.classList.add('dark-theme')
  }

  // body tag if dark-theme class name exists then remove it
  // it is going to add it if its not there
})

const inp = document.getElementById('input1')
console.log(inp.value)
btn2.addEventListener('click', () => {
  console.log(inp.value)
})
