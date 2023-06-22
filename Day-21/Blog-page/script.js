const baseUrl = 'http://localhost:3000'

function showPopup(message) {
  const popup = document.createElement('div')
  popup.classList.add('popup')
  popup.innerText = message
  document.body.appendChild(popup)
  setTimeout(function () {
    popup.remove()
  }, 9000)
}

const register = (e) => {
  e.preventDefault()
  var username1 = document.getElementById('username').value
  var password1 = document.getElementById('password').value

  const usersObj = {
    username: username1,
    password: password1,
  }
  axios
    .post(baseUrl + '/users', usersObj)
    .then(async function (response) {
      console.log('Signup successful!')
      //   document.getElementById('signupForm').reset();
      await showPopup('Registration successful!')
    })
    .catch(function (error) {
      console.error('Signup failed:', error)
    })
}

const login = (event) => {
  event.preventDefault()
  var loginUsername = document.getElementById('loginUsername').value
  var loginPassword = document.getElementById('loginPassword').value

  axios
    .get(baseUrl + '/users')
    .then(function (response) {
      var users = response.data
      console.log(users)
      var user = users.find(function (user) {
        return (
          user.username === loginUsername && user.password === loginPassword
        )
      })

      if (user) {
        console.log('Login successful!')
        showPopup('Login successful!')
        // window.location.href = 'login.html'
      } else {
        console.log('Invalid username or password!')
        showPopup('Invalid username or password!')
      }
    })
    .catch(function (error) {
      console.error('Login failed:', error)
    })
}

document.getElementById('signup').addEventListener('click', register)

document.getElementById('loginForm').addEventListener('submit', login)
