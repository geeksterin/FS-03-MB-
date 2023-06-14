document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput') // search box ka value
  const filter = document.getElementById('filter') // dropdown value
  const itemList = document.getElementById('itemList')
  const item = document.getElementsByClassName('item') // elements (for search) []

  // Fallacy approach

  const filterItems = () => {
    var searchItem = searchInput.value.toLowerCase()
    var filterValue = filter.value.toLowerCase()

    for (let i = 0; i < item.length; i++) {
      var itemvalue = item[i]
      var itemname = itemvalue.innerHTML.toLowerCase()
      var itemtype = itemvalue.className.split(' ')[1]
      console.log(itemtype)
      var show = true
      if (searchItem && !itemname.includes(searchItem)) {
        show = false
      }
      if (filterValue !== 'all' && itemtype !== filterValue) {
        show = false
      }

      itemvalue.style.display = show ? 'block' : 'none'
    }
  }

  searchInput.addEventListener('input', filterItems)
  filter.addEventListener('change', filterItems)
})
