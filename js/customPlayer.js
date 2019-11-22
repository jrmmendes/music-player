const play = (audioSource) => {
  audioSource.play();
};

const stop = (audioSource) => {
  audioSource.stop();
};

const playerRoot = document.querySelector('#player1');

const audioSrc = playerRoot.querySelector('.audio-source');
const controls = playerRoot.querySelector('.controls');
const progressBar = playerRoot.querySelector('.progress-bar');

const playBtn = controls.querySelector('.play');
const pauseBtn = controls.querySelector('.pause');
const forwardBtn = controls.querySelector('.forward');
const backwardBtn = controls.querySelector('.backward');

playBtn.addEventListener('click', () => {
  console.log('PLAY CLICKED');
  audioSrc.play();
  playerRoot.classList.add('-playing');
});

pauseBtn.addEventListener('click', () => {
  console.log('PAUSE CLICKED');
  audioSrc.pause();
  playerRoot.classList.remove('-playing');
});

forwardBtn.addEventListener('click', () => {
  console.log('+10 clicked');
  audioSrc.currentTime += 10;
});

backwardBtn.addEventListener('click', () => {
  console.log('-10 clicked');
  audioSrc.currentTime -= 10;
});

audioSrc.addEventListener('timeupdate', () => {
  const { currentTime, duration } = audioSrc;
  progressBar.style.width = `${100*currentTime/duration}%`;
});

progressBar.addEventListener('click', (event) => {
  console.log(event.clientX);
})
