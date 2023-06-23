const cardContainer = document.getElementById('cardContainer')
const baseUrl = 'http://localhost:3000/blogs'
const username = sessionStorage.getItem('username')
document.getElementById('user').textContent = 'Welcome : ' + username

count = 0

axios
  .get(baseUrl)
  .then((result) => {
    console.log(result.data)
    result.data.forEach(async (blog) => {
      console.log(blog)

      await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${result.data.length}`
      )
        .then((result) => {
          return result.json()
        })
        .then((res) => {
          console.log(res)
          const card = document.createElement('div')
          card.classList.add('card')

          const image = document.createElement('img')
          image.src = `https://picsum.photos/400/400?random=${
            res[count++]['url']
          }`

          const title = document.createElement('h3')
          title.textContent = blog['title']

          const desc = document.createElement('p')
          desc.textContent = blog['description']

          card.appendChild(image)
          card.appendChild(title)
          card.appendChild(desc)

          cardContainer.appendChild(card)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  })
  .catch((err) => {})
