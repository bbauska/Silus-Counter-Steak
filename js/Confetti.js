<!-- ./js/Confetti.js of Silus-Counter-Steak for silus-counter-steak.bauska.org -->
const confettiContainer = document.querySelector('#confetti-container');
const showConfetti = () => {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.textContent = '🥩';
  innerWidth = innerWidth * 0.5;  /* was 0.5 the innerwidth */
  confetti.style.left = Math.random() * innerWidth + 'px';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();  /* confetti.remove */
  }, 3000);  /* fade image in 3 seconds, was 5000 */
};

setInterval(() => {
  showConfetti();
}, 1000);  /* 400 */
