var leaderboardData = [] // index

// sorting and update rank in array
const updateRanks = () => {
  leaderboardData.sort((a, b) => b.score - a.score)
  for (var i = 0; i < leaderboardData.length; i++) {
    leaderboardData[i].rank = i + 1
  }
}

const deleteCard = (i) => {
  window.alert('Are you sure to delete the card?')

  leaderboardData.splice(i, 1)
  updateRanks()
  generateLeaderboard(leaderboardData)
}

var nameInput = document.getElementById('nameInput')
var scoreInput = document.getElementById('scoreInput')

const generateLeaderboard = (data) => {
  var leaderboardTable = document.getElementById('leaderboard')
  leaderboardTable.innerHTML =
    ' <tr><th>Rank</th><th>Name</th> <th>Score</th> <th>Actions</th></tr>'

  for (let i = 0; i < data.length; i++) {
    var row = `<tr>
        <td>
        ${data[i].rank}
        </td>
        <td>
            <span class="name-field" >
            ${data[i].name}
            </span>
        
                <input type="text" class="name-input" style="display: none;">
          
        </td>
        <td>
            <span class="score-field" >
            ${data[i].score}
            </span>
        
                <input type="number" class="score-input" style="display: none;">
        </td>
        <td>
            <button class="edit-btn" onclick="toggleEdit(${i})">Edit</button>
            <button class="delete-btn" onclick="deleteCard(${i})">Delete</button>
        </td>
       

    </tr>`

    leaderboardTable.innerHTML += row
  }
}

const addEntry = (event) => {
  event.preventDefault()
  var nameVal = nameInput.value
  var scoreVal = parseInt(scoreInput.value)

  var obj = {
    rank: 0,
    name: nameVal,
    score: scoreVal,
  }
  leaderboardData.push(obj)

  updateRanks()
  generateLeaderboard(leaderboardData)

  nameInput.value = ''
  scoreInput.value = ''
}

const update = (i, nameVal, scoreVal) => {
  leaderboardData[i].name = nameVal
  leaderboardData[i].score = scoreVal
  updateRanks()
  generateLeaderboard(leaderboardData)
}

const toggleEdit = (index) => {
  var nameField = document.getElementsByClassName('name-field')[index]
  var scoreField = document.getElementsByClassName('score-field')[index]
  var scoreInput = document.getElementsByClassName('score-input')[index]
  var nameInput = document.getElementsByClassName('name-input')[index]

  if (nameField.style.display == 'none') {
    nameField.style.display = 'inline'
    scoreField.style.display = 'inline'
    scoreInput.style.display = 'none'
    nameInput.style.display = 'none'
    update(index, nameInput.value, parseInt(scoreInput.value))
  } else {
    nameField.style.display = 'none'
    scoreField.style.display = 'none'
    scoreInput.style.display = 'inline'
    nameInput.style.display = 'inline'
  }
}

document.getElementById('addForm').addEventListener('submit', addEntry)
