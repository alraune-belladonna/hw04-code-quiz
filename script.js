//start button timer

function timer() {
  let sec = 5
  let timer = setInterval(function () {
    document.getElementById('timer').innerHTML = '00:0' + sec + ' left until start'
    sec--
    console.log('minus one second')
    if (sec < 0) {
      clearInterval(timer)
      const quizCreate = window.location.href = "./questionBody.html"
    }
  }, 1000)
}

//quiz timer

let timeLeft = 60

function timerQuestions() {
  var timerQuiz = setInterval(function () {
    document.getElementById('timerQuiz').innerHTML = `${timeLeft} seconds left`
    timeLeft--
    console.log(timeLeft)

    //out of time
    if (timeLeft < 0) {
      clearInterval(timer)
      const endGame = window.location.href = "./highScore.html"
    }
  }, 1000)
}

//question functions

let questionNumber = 1
let quizStart = false
let answerCorrect

function quizQuestions() {
  function rightOrWrong() {
    const answerCorrectBtn = document.getElementById(answerCorrect)
    answerCorrectBtn.addEventListener('click', function () {
      console.log('correct click')
      questionNumber++
    })
    const answerWrongBtn = document.getElementById(answerWrong)
    answerWrongBtn.addEventListener('click', function () {
      console.log('wrong click')
      timeLeft - 5
      questionNumber++
    })
  }
  if (questionNumber=2) {
    answer 
    document.getElementById('questionLocation').innerHTML = 'Which is not considered a backend language?'
    document.getElementById('answer1').innerHTML = 'Javascript'
    document.getElementById('answer2').innerHTML = 'MongoDB'
    document.getElementById('answer3').innerHTML = 'SQL'
    document.getElementById('answer4').innerHTML = 'HTML'
  }
}

const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', function () {
  console.log('start click')
  timer()
  quizStart = true
})

if (quizStart = true) {
  timerQuestions()
  quizQuestions()
}