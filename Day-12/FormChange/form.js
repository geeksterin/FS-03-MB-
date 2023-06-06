const form = document.getElementById('form')
const input = document.getElementsByTagName('input')

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('change', (event) => {
    const inputField = event.target
    const nameInput = inputField.name
    const text = inputField.value

    const res = document.getElementById('res')
    if (text.length < 2) window.alert('Please provide valid name')
    res.innerText = `${nameInput} changed with ${text}`
  })
}

form.addEventListener('change', () => {
  window.alert('Form changes')
})
