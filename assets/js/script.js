var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
    }, 1000);
}


setTime();