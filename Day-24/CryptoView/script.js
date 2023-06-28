const trending_coins_url = 'https://api.coingecko.com/api/v3/search/trending'

const get_trending_coins = async () => {
  const res = await fetch(trending_coins_url)
  const json_res = await res.json() // **** i.item
  for (let coins of json_res.coins) {
    const coinName = coins['item']['name']
    const coinPrice = coins['item']['price_btc'] * 2507698 // inr
    const iconUrl = coins['item']['small']
    console.log(coinName, coinPrice, iconUrl)
  }
}

get_trending_coins()
