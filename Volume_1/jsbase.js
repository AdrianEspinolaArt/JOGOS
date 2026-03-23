const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const winModal = document.getElementById("win-modal");
const timerDisplay = document.querySelector(".timer");

let startTime;
let interval;
let running = false;

function startTimer() {
    startTime = Date.now();
    running = true;
    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!running) return;
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const sec = String(elapsed % 60).padStart(2, '0');
    timerDisplay.textContent = `⏱️ ${min}:${sec}`;
}

function stopTimer() {
    running = false;
    clearInterval(interval);
}

function showWinModal() {
    stopTimer();
    winModal.style.display = "flex";
}

function resetGame() {
    stopTimer();
    timerDisplay.textContent = "⏱️ 00:00";
    winModal.style.display = "none";
}

startBtn.onclick = startTimer;
restartBtn.onclick = resetGame;