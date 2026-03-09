// 🔴 НАСТРОЙКИ
const startValue = 10000000;          // с какого числа начинать
const increasePerDay = 5250;    // сколько прибавляется за день
const startDate = new Date("2026-03-09T00:00:00"); // ДАТА ЗАПУСКА САЙТА

function updateCounter() {
  const now = new Date();

  // сколько секунд прошло с запуска
  const secondsPassed = (now - startDate) / 1000;

  // сколько прибавляется за секунду
  const increasePerSecond = increasePerDay / 86400;

  // итоговое значение
  const value = startValue + secondsPassed * increasePerSecond;

  const counterElement = document.getElementById("counter");
  if (counterElement) {
    counterElement.textContent = Math.floor(value).toLocaleString();
  }
}

// обновляем каждую секунду
updateCounter();
setInterval(updateCounter, 1000);

