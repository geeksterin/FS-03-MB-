const bitcoin_api =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr'

const trending_coin_api = 'https://api.coingecko.com/api/v3/search/trending'

const search_api = `https://api.coingecko.com/api/v3/search?query=`

const trendingCoinsSlideshow = document.getElementById(
  'trending_coins_slideshow'
)
const searchInput = document.getElementById('search_input')
const coinsContainer = document.getElementById('coins_container')
const searchButton = document.getElementById('search_input_button')
const coinDescription = document.getElementById('coin_description')
const coinInfoHeading = document.getElementById('coin_info_heading')
const coinInfoIcon = document.getElementById('coin_info_icon')
const coinPrices = document.getElementsByClassName('coin_pricing')
const coinDetail = document.getElementById('coinDetail')

const scrollAnimation = () => {
  let count = 0
  let flag = true // true means going up else down
  setInterval(() => {
    const endPoint =
      trendingCoinsSlideshow.scrollWidth - trendingCoinsSlideshow.offsetWidth
    if (flag) {
      count += 1
      if (count === endPoint) {
        flag = false
      }
    } else {
      count -= 1
      if (count === 0) {
        flag = true
      }
    }
    trendingCoinsSlideshow.scrollTo(count, 0)
  }, 10)
}

const getBitcoinValue = async () => {
  const res = await fetch(bitcoin_api)
  const jsonData = await res.json()
  return jsonData.bitcoin.inr
}

const getTrendingCoins = async () => {
  const res = await fetch(trending_coin_api)
  const jsonData = await res.json()
  const bitcoinVaue = await getBitcoinValue()
  const coins = jsonData.coins
  let html = ''
  for (let i = 0; i < coins.length; i++) {
    const coinName = coins[i].item.name
    const coinPrice = coins[i].item.price_btc * bitcoinVaue
    const coinSymbol = coins[i].item.symbol
    const coinIconUrl = coins[i].item.small
    html += `<div class="trending_coin_container">
          <img src="${coinIconUrl}" class="coin_logo" alt="coin logo" />
          <div class="coin_info_container">
            <h1 class="coin_name">${coinName} (${coinSymbol})</h1>
            <h4 class="coin_price">Rs ${coinPrice.toFixed(4)}</h4>
          </div>
        </div>`
  }
  trendingCoinsSlideshow.innerHTML = html
  scrollAnimation()
}

const getCoins = async () => {
  const res = await fetch(search_api + searchInput.value)
  const jsonData = await res.json()
  let html = ''
  for (let i = 0; i < jsonData.coins.length; i++) {
    const coin = jsonData.coins[i]
    html += `<div class="coin_box">
          <div class="coin_info">
            <h5 class="serial_number">${i + 1}</h5>
            <img class="coin_image" src="${coin.large}" />
            <h4 class="coin_title">${coin.name} ${coin.symbol}</h4>
          </div>
          <a href="./detail.html?id=${
            coin.id
          }"><button class="more_info_button">More Info</button></a>
        </div>`
  }
  coinsContainer.innerHTML = html
}

const getCoinInfo = async (coinId) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  )
  const jsonData = await res.json()
  coinDescription.innerHTML = jsonData.description.en
  coinInfoHeading.innerText = `${
    jsonData.name
  } (${jsonData.symbol.toUpperCase()})`
  coinInfoIcon.setAttribute('src', jsonData.image.large)
  coinDetail.innerText = jsonData.name
  coinPrices[0].innerText = `₹ ${jsonData.market_data.current_price.inr}`
  coinPrices[1].innerText = `$ ${jsonData.market_data.current_price.usd}`
  coinPrices[2].innerText = `€ ${jsonData.market_data.current_price.eur}`
  coinPrices[3].innerText = `£ ${jsonData.market_data.current_price.gbp}`
}

const createChart = async (coinId) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=inr&days=1&interval=hourly`
  )
  const jsonData = await res.json()
  const xValues = []
  const yValues = []
  for (const price of jsonData.prices) {
    const d = new Date(0)
    d.setUTCMilliseconds(price[0])
    xValues.push(`${d.getHours()}:${d.getMinutes()}`)
    yValues.push(price[1])
  }
  new Chart('coin_chart', {
    type: 'line',
    data: {
      labels: xValues,
      datasets: [
        {
          label: 'Price',
          data: yValues,
          borderColor: 'blue',
        },
      ],
    },
  })
}
