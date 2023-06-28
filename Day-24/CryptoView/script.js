const trending_coins_url = 'https://api.coingecko.com/api/v3/search/trending'
const search_coin_api = 'https://api.coingecko.com/api/v3/search?query='

const slider = document.getElementsByClassName('coins_slider')[0]
const coins_container = document.getElementsByClassName(
  'search_coins_container'
)[0]
const search_input = document.getElementById('search_input')
const search_button = document.getElementById('search_button')

const get_trending_coins = async () => {
  const res = await fetch(trending_coins_url)
  const json_res = await res.json() // **** i.item

  let html = ''
  for (let coins of json_res.coins) {
    const coinName = coins['item']['name']
    const coinPrice = coins['item']['price_btc'] * 2507698 // inr
    const iconUrl = coins['item']['small']
    html += `<div class="trending_coins">
                    <img src="${iconUrl}" alt="coin_icon" class="coin_logo">
                    <div class="coin_info">
                        <h2 class="coin_name">${coinName}</h2>
                        <h4 class="coin_price">${coinPrice.toFixed(4)}</h4>
                    </div>
                   </div>`
    slider.innerHTML = html
  }
}

get_trending_coins()

const get_search_coins = async () => {
  // console.log(search_coin_api + search_input.value)
  const res = await fetch(search_coin_api + search_input.value)
  const jsonData = await res.json()
  let html = ``
  for (let i = 0; i < jsonData['coins'].length; i++) {
    const coin = jsonData['coins'][i]
    html += `<div class="coin_box">
     <div class="coin_info">
         <h5 class="number">${i + 1}</h5>
         <img src="${coin['thumb']}" alt="coin" class="coin_image">
         <h4 class="title">${coin['name']} (${coin['symbol']})</h4>
     </div>
     <button class="more_info">More Info</button>
  </div>`
  }

  coins_container.innerHTML = html
}

search_button.addEventListener('click', get_search_coins)
