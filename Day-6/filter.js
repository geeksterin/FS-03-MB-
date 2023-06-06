const arr = [23, 5, 67, 7, 88, 235, 14, 45, 12]

// json array - age group

// to get the objects or elements whom have age greater than equal to 18
const even = arr.filter((ele) => {
  if (ele % 2 !== 0) return true

  return false
})

console.log(even)
