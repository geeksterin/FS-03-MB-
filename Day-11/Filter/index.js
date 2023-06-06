const personElement = document.querySelectorAll('.person')
const parentElement = document.querySelector('.parent')
const btn = document.querySelector('#submit')
const genderFilter = document.querySelector('#genderFilter')

const filterData = () => {
  const selectedGender = genderFilter.value // dropdown selected value
  console.log(selectedGender)
  console.log(personElement)
  for (let i = 0; i < personElement.length; i++) {
    const person = personElement[i]
    const personGender = person.getAttribute('data-gender')
    const text = person.textContent
    if (selectedGender == 'all' || personGender == selectedGender) {
      person.style.display = 'block' // visible
    } else {
      person.style.display = 'none'
    }
  }
}

btn.addEventListener('click', filterData)
