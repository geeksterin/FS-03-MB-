// Write a function in js to get the student details who has grade >=70
const students = [
  {
    name: 'Ayush',
    roll: 24,
    score: [72, 74, 73, 76, 65, 76, 65],
  },
  {
    name: 'Rajat',
    roll: 25,
    score: [12, 84, 93, 46, 95, 76, 95],
  },
  {
    name: 'Tanay',
    roll: 14,
    score: [72, 54, 43, 46, 65, 36, 65],
  },
]

const res_Array = students.filter((ele) => {
  // ele-> current_element
  const sum = ele['score'].reduce((acc, ele) => {
    // acc-> prev value and ele-> current_element
    return acc + ele
  }, 0)

  const grade = sum / ele['score'].length

  console.log('grade= ', ele.name, ' ', grade)

  return grade >= 70 // boolean val
})

console.log(res_Array.map((e) => e.name))
