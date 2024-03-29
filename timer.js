function formatTimeToString(milliseconds) {

    let minutes = Math.floor(milliseconds / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let millisecondsRemaining = milliseconds % 1000;

    let minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
    let secondsFormatted = seconds < 10 ? '0' + seconds : seconds;
    let millisecondsFormatted = millisecondsRemaining < 10 ? '00' + millisecondsRemaining : millisecondsRemaining < 100 ? '0' + millisecondsRemaining : millisecondsRemaining;

    return minutesFormatted + ':' + secondsFormatted + ':' + millisecondsFormatted;
};

function timer() {
    const timerCount = document.getElementById("timer_count");
    const minutes = document.getElementById("input_minute_value");
    const minutesToMilliseconds = minutes.value * 60 * 1000;

    let decrease = minutesToMilliseconds;
    setInterval(() => {
        timerCount.innerText = formatTimeToString(decrease);
        decrease = decrease - 1;
    }, 1);
};