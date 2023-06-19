const APIURL = 'https://api.github.com/users/' // base url
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

const addRepos = (res) => {
  const reposList = document.getElementById('repos')
  // desc order
  const arr = res
    .sort((b, a) => a.stargazers_count - b.stargazers_count)
    .slice(0, 7)
  console.log(arr)

  arr.forEach((repo) => {
    // filtered array
    const ele = document.createElement('a')
    ele.classList.add('repo')
    ele.href = repo.html_url
    ele.innerText = repo.name
    reposList.appendChild(ele)
  })
}

const getRepos = async (username) => {
  const repoUrl = APIURL + username + '/repos'
  const res = await fetch(repoUrl)
  const resData = await res.json()
  console.log(resData)
  addRepos(resData)
}

const getUser = async (username) => {
  // fetch(url)
  try {
    const usersearchURL = APIURL + username //  -> https://api.github.com/users/Techayush65678
    const res = await fetch(usersearchURL) // concat of url + username
    console.log(res)
    const data = await res.json() // Async operation
    console.log(data)

    createUser(data)

    await getRepos(username) // repos
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

// star_gazers count

// default behaviour of enter in input box is submit event
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const user = search.value // user input in the search box
  getUser(user)
  console.log('worked')
})
getUser('TecHAyush6476')
