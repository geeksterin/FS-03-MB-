// Axios will the normal js object (.json() not required)
// const axios = require('axios')
// npm i axios
// login ->
// axios
//   .get('https://api.github.com/users/TecHAyusH6476')
//   .then((res) => {
//     console.log(res)
//     console.log(res.data) // for data or response
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// signup

document.getElementById('signup').addEventListener('submit', (e) => {
  e.preventDefault()
  const emailVal = document.getElementById('email').value
  const passVal = document.getElementById('pass').value

  const user = {
    email: emailVal,
    pass: passVal,
  }
  axios
    .post('https://localhost:5000/users', user)
    .then((res) => {
      console.log(res)
      window.alert('Registered!!!')
    })
    .catch((err) => {
      console.log(err)
    })
  window.location.href = 'login.html' // Router
})

document.getElementById('login').addEventListener('submit', (e) => {
  e.preventDefault()

  const emailVal = document.getElementById('email').value
  const passVal = document.getElementById('pass').value

  axios.get('https://localhost:5000/users').then((res) => {
    const userData = res.data
    const isCorrectLogin = userData.find((e) => {
      return e.email === emailVal && e.pass === passVal
    })

    if (isCorrectLogin) {
      alert('Login success')
      window.location.href = 'home.html'
    } else {
      alert('Wrong credentials')
      window.location.href = 'login.html'
    }
  })
})
