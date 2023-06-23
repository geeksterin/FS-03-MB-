const baseUrl = 'http://localhost:3000'

function showPopup(message) {
  const popup = document.createElement('div')
  popup.classList.add('popup') // style
  popup.innerText = message
  document.body.appendChild(popup)
  setTimeout(function () {
    popup.remove()
  }, 9000)
}

const register = (e) => {
  e.preventDefault()

  // getting values from form
  var username1 = document.getElementById('username').value
  var password1 = document.getElementById('password').value

  // model for users
  const usersObj = {
    username: username1,
    password: password1,
  }
  axios
    .post(baseUrl + '/users', usersObj)
    .then(function (response) {
      console.log('Signup successful!')
      console.log(response)
      //   document.getElementById('signupForm').reset();
      if (response.status === 201) showPopup('Registration successful!')
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

      // user validation
      var user = users.find(function (user) {
        return (
          user.username === loginUsername && user.password === loginPassword
        )
      })

      if (user) {
        sessionStorage.setItem('username', loginUsername)
        console.log('Login successful!')
        showPopup('Login successful!')
        window.location.href = 'blogs.html'
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
