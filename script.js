function timer() {
  var timeLeft = 5;
  var timeLeftDisp = body.div.appendElement(timeLeft + 'til Start');

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  const timeInterval = setInterval(() => {
    timeLeft--
    console.log('time down')

    if (time > 0) {
      timeLeftDisp = timeLeft + ' seconds til Start';
    }

    if (timeLeft < 0) {
      clearInterval(timeInterval)
      displayMessage()
    }
  }, 1000)
}

timer()

const startButton = document.getElementById('startBtn')

startButton.addEventListener('click', function() {
  timer()
  console.log('Button Pressed')
})