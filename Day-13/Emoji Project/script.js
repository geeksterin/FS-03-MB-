const searchForm = document.getElementById('search_form')
const searchValue = document.getElementById('search_field') // value from input

const searchEmoji = (event) => {
  event.preventDefault()
  const value = searchValue.value
  displaySearchResults(value)
}
// 1
const displaySearchResults = (searchValue = '') => {
  // default param = ''
  // default ('') -> to see all data at first load
  // e= {
  //   emoji: '😀',
  //   description: 'grinning face',
  //   category: 'Smileys & Emotion',
  //   aliases: ['grinning'],
  //   tags: ['smile', 'happy'],
  //   unicode_version: '6.1',
  //   ios_version: '6.0',
  // }
  const filteredData = emojiList.filter((e) => {
    // emojiList array
    if (e.tags.some((element) => element.startsWith(searchValue))) {
      // ''
      return true
    }
    if (e.aliases.some((element) => element.startsWith(searchValue))) {
      return true
    }
  })

  const parent = document.getElementById('search_container')
  parent.innerHTML = ''
  filteredData.forEach((e) => {
    const new_row = document.createElement('tr')
    const new_emoji = document.createElement('td')
    const new_description = document.createElement('td')
    const new_aliases = document.createElement('td')
    const copy_btn = document.createElement('td')
    const aliases_str = e.aliases.reduce((acc, ele) => acc + ele, ' ')

    new_emoji.innerText = e.emoji
    new_description.innerText = e.description
    new_aliases.innerText = aliases_str
    new_emoji.classList.add('emoji')
    new_aliases.classList.add('aliases')
    new_description.classList.add('description')

    const btn = document.createElement('button')
    btn.innerText = 'copy'
    btn.classList.add('copy-button')
    btn.addEventListener('click', () => {
      copyEmoji(e.emoji + e.description) //
    })
    copy_btn.appendChild(btn)
    new_row.appendChild(new_emoji)
    new_row.appendChild(new_description)
    new_row.appendChild(new_aliases)
    new_row.appendChild(copy_btn)
    parent.appendChild(new_row)
  })
}

const copyEmoji = async (emoji) => {
  try {
    await navigator.clipboard.writeText(emoji) // copy to clipboard
  } catch (e) {}
}

searchForm.addEventListener('submit', searchEmoji) // for submit button

// type the search value get the emoji instantly
searchValue.addEventListener('keyup', (event) => {
  const value = event.target.value
  displaySearchResults(value)
})

window.onload = (_) => displaySearchResults() // 1
