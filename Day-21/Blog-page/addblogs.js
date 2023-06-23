const form = document.getElementById('blog-form')
const baseUrl = 'http://localhost:3000/blogs'

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const title1 = document.getElementById('title').value
  const description1 = document.getElementById('desc').value

  const obj = {
    title: title1,
    description: description1,
  }

  axios
    .post(baseUrl, obj)
    .then((result) => {
      console.log(result)
      window.location.href = 'blogs.html'
    })
    .catch((err) => {
      console.log(err)
    })
})
