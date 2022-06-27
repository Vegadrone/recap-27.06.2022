const start = document.querySelector(".btn-primary");
const stop = document.querySelector(".btn-success");
const reset = document.querySelector(".btn-danger");
let chronometer = document.getElementById("tempo");


let clock;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeRunning = false;

print();

start.addEventListener("click", function () {

    if (timeRunning === false) {

        console.log("Inizia");
        clock = setInterval(function () {

            milliseconds++;

            if (milliseconds > 99) {
                seconds++;
                milliseconds = 0;

            }

            if (seconds > 59) {
                minutes++;
                seconds = 0;

            }

            if (minutes > 59) {
                hours++;
                minutes = 0;

            }

            print();

        }, 10);

        timeRunning = true;
    }
});


stop.addEventListener("click", function () {
    console.log("Stop");
    clearInterval(clock);
    timeRunning = false;
});

reset.addEventListener("click", function () {
    console.log("Reset");
    clearInterval(clock);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    timeRunning = false;

    print();
});

function print() {
    chronometer.innerHTML = `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)}:${padzero(milliseconds)}`;
};

function padzero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
};



