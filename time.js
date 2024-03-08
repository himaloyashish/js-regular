const timeOut = document.getElementById("timeOut");
const interval = document.getElementById("interval");

let timeInstance;
let intervalInstance;

function startTimeOut() {
    timeInstance = setTimeout(function () {
        timeOut.innerHTML = "3 seconds is over "
    }, 3000);

}

function stopTimeOut() {
    clearTimeout(timeInstance)
}


function startInterval() {
    intervalInstance = setInterval(function () {
        interval.innerHTML = new Date().toLocaleDateString()
    }, 3000);
}


function stopInterval() {
    clearInterval(intervalInstance)
}