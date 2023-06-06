// // String is sequence of character literals

// // Mutable vs Immutable in strings - In general

// // String is mutable or immutable in java?
// // Immutable

// // String works with indexes
// // Do we have negative index in strings in JS?

// var str = 'hello world'
// console.log(str.length)

// const str1 = 'first'
// const str2 = 'second'

// // concat - > return a new string and dont change original string

// const res = str1.concat(str2)

// console.log(res)
// // console.log(str1)

// const res2 = str1.concat('\t', str2, ' hello')

// console.log(res2)

// // console.log(`The sum of 2 and 3 is 5`) // statically writing the data
// // let a = '2'
// // let b = 3
// // console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// // let string = 'JavaScript'
// // console.log(string.substr(4, 6)) // Script

// // let country = 'Finland'
// // console.log(country.substr(0, 3)) // land

// // 3 separators - ' ', '' , ','
// // let string = '30 Days OfJavaScript'

// // console.log(string.split()) // Changes to an array -> ["30 Days Of JavaScript"]
// // console.log(string.split(' ')) // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// let firstName = 'Asabeneh'

// console.log(firstName.split()) // Change to an array - > ["Asabeneh"]
// console.log(firstName.split('', 5)) // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(',')) // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', ',2)) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// slice in string in js and substring

let str4 = 'hello world'

// console.log(str4.substring(0, 7))
console.log(str4.slice(-5))
console.log(str4.substring(4, 0))
console.log(str4.substring(0, 4))

// starting index is greater than ending index
// they both get swapped

// if negative indexes are passed it will be 0
