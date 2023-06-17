const APIURL = 'https://api.github.com/users/' // base url
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

const getUser = async (username) => {
  // fetch(url)
  try {
    const usersearchURL = APIURL + username //  -> https://api.github.com/users/Techayush65678
    const res = await fetch(usersearchURL) // concat of url + username
    console.log(res)
    const data = await res.json() // Async operation
    console.log(data)

    createUser(data)
  } catch (e) {
    console.log(e)
  }
}

const createUser = (user) => {
  const HTMLCard = `<div class="card">    
<div>
    <img src="${user.avatar_url}" alt="${user.name}" class="avatar"/>
</div>
<div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul class="info">
        <li>${user.followers}<b>Followers</b></li>
        <li>${user.following}<b>Followers</b></li>
        <li>${user.public_repos}<b>Repos</b></li>
    </ul>
    <div id="repos">
 
    </div>
</div>
</div>`

  main.innerHTML = HTMLCard
}

// default behaviour of enter in input box is submit event
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const user = search.value // user input in the search box
  getUser(user)
  console.log('worked')
})
