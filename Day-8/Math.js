// Math object - maths operations
// Functions and constants

const absValue = Math.abs(-3)
const absValue2 = Math.abs(2)

//   4 , 4.1 ,4.2,...   ,5,5.1  , 5.34 , 6
const ceilVal = Math.ceil(5.000001) // next higher integer when decimal passed
const floorVal = Math.floor(5.34) // next lower integer when decimal passed

// console.log(floorVal)
// console.log(ceilVal)

// 4 , 4.1 ,4.2,4.4,4.5,4.6...  , 5, 5.1  , 5.34 , 6
const val3 = Math.round(5.5) // >=0.5 returns next higher int else (<0.5) returns prev lower
// console.log(val3)

const maxVal = Math.max(12, 14, 34, 5, 4, 3, 3, 3, 3, 56, 56, 5, 5)
const minVal = Math.min(12, 14, 14, 34, 5, 4, 3, 3, 1)
// console.log(maxVal, minVal)

const arr = [14, 34, 5, 4, 3, 3, 3, 3, 56]

const maxArrayValue = Math.max(...arr) // spreading elements of array

const strVal = Math.min('23', '34', 3)

// console.log(strVal)

const num = Math.random() // returns number b/w 0(inclusive) to 1 (exclusive)

// use math.random and return int num b/w 100 to 20 (exclude)
const n = Math.floor(Math.random() * 10000)

const sqr = Math.pow(12, 3) // 2^3

console.log(n)
