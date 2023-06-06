const arr = [23, 4, 6, 7, 7, 8]

let evenArr = []
arr.forEach((ele, ind) => (ele % 2 === 0 ? evenArr.push(ele * ele) : ''))
// you need elements to fetch or manipulate instead of returning array
console.log(evenArr)
