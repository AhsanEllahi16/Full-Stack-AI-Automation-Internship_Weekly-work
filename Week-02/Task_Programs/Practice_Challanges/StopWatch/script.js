let time = document.getElementById("time");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let seconds = 0;
let timer = null;

// Start Button
start.addEventListener("click", function () {

    // Prevent multiple timers
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        seconds++;

        if (seconds < 10) {
            time.innerText = "0" + seconds;
        } else {
            time.innerText = seconds;
        }

    }, 1000);

});

// Stop Button
stop.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

});

// Reset Button
reset.addEventListener("click", function () {

    clearInterval(timer);

    timer = null;

    seconds = 0;

    time.innerText = "00";

});