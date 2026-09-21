const confettiContainer = document.querySelector('#confetti-container');
const showConfetti = () => {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.textContent = '🥩';
  innerWidth = innerWidth * 0.5;
  confetti.style.left = Math.random() * innerWidth + 'px';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();  /* confetti.remove */
  }, 3000);  /* wait 3 seconds, was 5000 */
};

setInterval(() => {
  showConfetti();
}, 1000);  /* 400 */
