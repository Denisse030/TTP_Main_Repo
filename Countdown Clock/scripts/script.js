let countdown = 5;
let timerDisplay = document.getElementById('timer');

let countdownInterval = setInterval(function() {
    countdown--;
    timerDisplay.innerText = countdown;

    if (countdown === 0) {
    clearInterval(countdownInterval);
    timerDisplay.innerText = "Liftoff!!";
    }
}, 1000);