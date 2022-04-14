//start button timer

function timer() {
  var sec = 5
  var timer = setInterval(function () {
    document.getElementById('timer').innerHTML = '00:0' + sec + ' left until start'
    sec--
    console.log('minus one second')
    if (sec < 0) {
      clearInterval(timer)
      const quizCreate = window.location.href = "./questionBody.html"
      timerQuestions()
    }
  }, 1000)
}

const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', function() {
  console.log('start click')
  timer()
})

//quiz timer

function timerQuestions() {
  var timeLeft = 60
  var timer = setInterval(function () {
    document.getElementById('timer').innerHTML = '00:' + sec + ' left'
    timeLeft--

    //out of time
    if (sec < 0) {
      clearInterval(timer)
      const endGame = window.location.href = "./highScore.html"
    }
  }, 1000)
}

//question functions

function quizQuestions() {
  var questionNumber = 1
}

function rightOrWrong() {

  const answerCorrectBtn = document.getElementById(answerCorrect)
  answerCorrectBtn.addEventListener('click', function () {
    console.log('correct click')
    questionNumber++
  })

  const answerWrongBtn = document.getElementsByClassName(answerWrong)
  answerWrongBtn.addEventListener('click', function () {
    console.log('wrong click')
    timeLeft - 5
    questionNumber++
  })
}