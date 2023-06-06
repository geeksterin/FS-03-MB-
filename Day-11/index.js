const div = document.querySelector('.main')
const btn = document.querySelector('#add')
const del = document.querySelector('#del')
const body = document.body
const head = document.createElement('h1') //<h1></h1>
head.textContent = 'This is text passed to createElement (h1)'
head.style.color = 'blue'

const span = document.createElement('span')
span.textContent = 'This is a span text'
const p = document.createElement('p')
p.innerText = 'This is a para text'
const html = '<h1>This is h1 text</h1>'

const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
li1.innerHTML = '<h1>This is h1 text</h1>'
li2.innerText = '<h1>This is h1 text</h1>'

ul.append(li1, li2)
const refNode = div.firstChild

btn.addEventListener('click', () => {
  //   div.appendChild(head)
  //   div.append(span, head, p, html)
  //   console.log(head)
  //   console.log(html)
  //   div.insertAdjacentHTML('beforeend', html)

  div.insertBefore(ul, refNode)
})
const taglist = document.getElementsByTagName('h1')
console.log(taglist)
// RemoveChild works with child and immediate parent
del.addEventListener('click', () => {
  //   ul.removeChild(li1)
})
