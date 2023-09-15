const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const saveConfigButton = document.getElementById('saveConfig');

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const longBreakSpan = document.getElementById('pomodoroCount');

const pomodoroTimeConfig = document.getElementById('pomodoroTimerConfig');
const shortBreakTimeConfig = document.getElementById('shortBreakTimeConfig');
const longBreakTimeConfig = document.getElementById('longBreakTimeConfig');
const longBreakIntervalConfig = document.getElementById('longBreakIntervalConfig');

let timerInterval;
let minutes = parseInt(pomodoroTimeConfig.value);
let seconds = 0;
let pomodoroCount = 0;

// タイマーの更新
function updateTimer() {
    seconds--;
    if (seconds < 0) {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            // タイマーが0になった場合
            clearInterval(timerInterval);
            pomodoroCount++;
            longBreakSpan.textContent = pomodoroCount;
            // 休憩時間を設定
            if (pomodoroCount % parseInt(longBreakIntervalConfig.value) === 0) {
                minutes = parseInt(longBreakTimeConfig.value);
            } else {
                minutes = parseInt(shortBreakTimeConfig.value);
            }
            seconds = 0;
            // タイマー再開
            startTimer();
        }
    }

    // ゼロ埋めして表示
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');

    document.title = `▶️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0') } | ポモドーロタイマー`;
}

// タイマーを開始
function startTimer() {
    document.title = `▶️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} | ポモドーロタイマー`;
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    saveConfigButton.disabled = true;
}

// タイマーを一時停止
function pauseTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
    saveConfigButton.disabled = false;
    document.title = `⏸ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} | ポモドーロタイマー`;
}

// タイマーをリセット
function resetTimer() {
    clearInterval(timerInterval);
    minutes = parseInt(pomodoroTimeConfig.value);
    seconds = 0;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    saveConfigButton.disabled = false;
    document.title = 'ポモドーロタイマー';
}

// 設定を反映
function updateConfig() {
    minutes = parseInt(pomodoroTimeConfig.value);
    seconds = 0;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    longBreakSpan.textContent = pomodoroCount;
}

// イベントリスナーを設定
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
saveConfigButton.addEventListener('click', updateConfig);

