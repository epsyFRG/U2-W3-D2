// Recupera il valore dal sessionStorage o parte da 0
let seconds = parseInt(sessionStorage.getItem("sessionSeconds")) || 0
const timerDiv = document.getElementById("timer")
timerDiv.textContent = seconds
// Aggiorna il timer ogni secondo
setInterval(() => {
  seconds++
  timerDiv.textContent = seconds
  sessionStorage.setItem("sessionSeconds", seconds)
}, 1000)
