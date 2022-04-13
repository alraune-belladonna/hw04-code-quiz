var timeLeft = 5;
const timeLeftDisp = document.getElementById('timer').innerHTML
const startBtn = document.getElementById('startBtn')

// const timer = () => {

//   // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds

//   setInterval(function() {
//     timeLeft--
//     console.log('time down')

//     if (time > 0) {
//       timeLeftDisp.appendElement(`${timeLeft} seconds left until start`);
//     }

//     if (timeLeft < 0) {
//       clearInterval(timeInterval)
//       window.location.replace("./")
//     }
//   }, 1000);
// }

function timer() {
  var sec = 5;
  var timer = setInterval(function () {
    document.getElementById('timer').innerHTML = '00:0' + sec + ' left until start';
    sec--;
    console.log('minus one second')
    if (sec < 0) {
      clearInterval(timer);
      window.location.href = "./questionBody.html"
    }
  }, 1000);
}

startBtn.addEventListener('click', function() {
  console.log('start click')
  timer()
})