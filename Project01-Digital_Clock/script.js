// Removed unnecessary variable 'options'

// Corrected the element creation for the 'hour' span
const hourE = document.getElementById("hour");
const minuteE = document.getElementById("minute");
const secondE = document.getElementById("second");
const ampmE = document.getElementById("ampm");

function TimeCall() {
  // Corrected method calls to get current time
  let h = new Date().getHours(); // Corrected method call to getHours()
  let m = new Date().getMinutes(); // Corrected method call to getMinutes()
  let s = new Date().getSeconds(); // Corrected method call to getSeconds()
  let ampm = "AM";

  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourE.innerText = h;
  minuteE.innerText = m;
  secondE.innerText = s;
  ampmE.innerText = ampm;

  setTimeout(TimeCall, 1000); // Removed unnecessary anonymous function wrapper
}
TimeCall();
