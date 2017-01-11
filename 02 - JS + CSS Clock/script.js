const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDegree(base, denominator, hand) {
  degree = ((base / denominator) * 360) + 90;
  hand.style.transform = `rotate(${degree}deg)`;
};

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  setDegree(seconds, 60, secondHand);
  setDegree(mins, 60, minHand);
  setDegree(hours, 12, hourHand);
};

setInterval(setDate, 1000);

setDate();
