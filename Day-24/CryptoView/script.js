const main = () => {
  if (window.location.pathname.includes('detail')) {
    const coinId = new URLSearchParams(window.location.search).get('id')
    getCoinInfo(coinId)
    createChart(coinId)
  } else if (window.location.pathname.includes('search')) {
    searchButton.addEventListener('click', getCoins)
  } else {
    getTrendingCoins()
  }
}

main()
