document.addEventListener('DOMContentLoaded', (e) => {
  const playingArea = new PlayingArea(document.querySelector('.playing-area'));

  setInterval(playingArea.randomMovingGoblin, 1000);
})
