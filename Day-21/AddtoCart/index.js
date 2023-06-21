const cartItemsContainer = document.querySelector('.cart-items') // ul
const cartCount = document.querySelector('.cart-count')

let itemCount = 0

const addToCart = (btn) => {
  const product = btn.parentElement
  console.log(product)
  const name = product.querySelector('h2').textContent
  const price = product.querySelector('p').textContent
  const cartItem = document.createElement('li')
  cartItem.innerHTML = `${name} ${price}`
  cartItemsContainer.appendChild(cartItem)

  itemCount++
  cartCount.textContent = itemCount
}

const toggleCart = () => {
  const cartItems = document.querySelector('.cart-items')
  if (cartItems.style.display === 'none') {
    cartItems.style.display = 'block'
  } else {
    cartItems.style.display = 'none'
  }
}
