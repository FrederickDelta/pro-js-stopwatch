let totalCentiSeconds = 0
let totalSeconds = 0;
let totalMinutes = 0;
let totalHours = 0;

//Test cases
//let s55 = 55 * 100;
//let m59 = 59 * 60 * 100;
//let h23 = 23 * 60 * 60 * 100;
//totalCentiSeconds = s55;
//totalCentiSeconds = m59 + s55;
//totalCentiSeconds = h23 + m59 + s55;

let timeoutID;

const hoursLabel = document.querySelector("#hours");
const minutesLabel = document.querySelector("#minutes");
const secondsLabel = document.querySelector("#seconds");
const centiSecondsLabel = document.querySelector("#centi-seconds");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

startButton.addEventListener("click", startStopwatch);
resetButton.addEventListener("click", resetStopwatch);

function startStopwatch() {
  if (this.dataset.status === "off") {
    //If the value is less than 10, the value 10 is used
    timeoutID = setInterval(setTime, 10); 
    this.textContent = "Stop";
    this.dataset.status = "on";
  } else {
    clearTimeout(timeoutID);
    this.textContent = "Start";
    this.dataset.status = "off";
  }
}

function setTime() {
  //if (totalCentiSeconds >= 24 * 60 * 60 * 100) {totalCentiSeconds = 0;}
  totalCentiSeconds++;

  totalSeconds = parseInt(totalCentiSeconds / 100);
  totalMinutes = parseInt(totalSeconds / 60);
  totalHours = parseInt(totalMinutes / 60);

  centiSecondsLabel.textContent = pad(totalCentiSeconds % 100);
  secondsLabel.textContent = pad(totalSeconds % 60);
  minutesLabel.textContent = pad(totalMinutes % 60);
  hoursLabel.textContent = pad(totalHours);
}

function pad(value) {
  return (value > 9) ? value : ("0" + value);
}

function resetStopwatch() {
  totalCentiSeconds = 0;
  centiSecondsLabel.textContent = pad(0);
  secondsLabel.textContent = pad(0);
  minutesLabel.textContent = pad(0);
  hoursLabel.textContent = pad(0);
}