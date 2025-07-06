// stopwatch using setInterval

let hour = 0;
let minute = 0;
let second = 0;

let timerDisplay = document.getElementById('timer-display');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
    startBtn.style.backgroundColor = 'black';
    startBtn.style.color = 'white';
    startBtn.style.border = '1px solid white';
    pauseBtn.style.backgroundColor = 'white';
    pauseBtn.style.color = 'black';
    pauseBtn.style.border = '1px solid black';
    resetBtn.style.backgroundColor = 'white';
    resetBtn.style.color = 'black';
    resetBtn.style.border = '1px solid black';

startTimer();
    function startTimer() {
        setInterval(() => {
            timerDisplay.textContent = `${hour} : ${minute} : ${second}`
            second++;

            if (second === 60) {
                second = 0;
                minute++;
            }
            if (minute === 60) {
                minute = 0;
                hour++;
            }
        }, 1000);
    }

});

pauseBtn.addEventListener('click', () => {
    pauseBtn.style.backgroundColor = 'black';
    pauseBtn.style.color = 'white';
    pauseBtn.style.border = '1px solid white';
    startBtn.style.backgroundColor = 'white';
    startBtn.style.color = 'black';
    startBtn.style.border = '1px solid black';
    resetBtn.style.backgroundColor = 'white';
    resetBtn.style.color = 'black';
    resetBtn.style.border = '1px solid black';
    stopBtn.style.backgroundColor = 'white';
    stopBtn.style.color = 'black';
    stopBtn.style.border = '1px solid black';
    
    clearInterval(startTimer());
    

    
});

resetBtn.addEventListener('click', () => {
    resetBtn.style.backgroundColor = 'black';
    resetBtn.style.color = 'white';
    resetBtn.style.border = '1px solid white';
    startBtn.style.backgroundColor = 'white';
    startBtn.style.color = 'black';
    startBtn.style.border = '1px solid black';
    pauseBtn.style.backgroundColor = 'white';
    pauseBtn.style.color = 'black';
    pauseBtn.style.border = '1px solid black';

    hour = 0;
    minute = 0;
    second = 0;
    timerDisplay.textContent = `${hour} : ${minute} : ${second}`
    stopInterval(startTimer());
});

