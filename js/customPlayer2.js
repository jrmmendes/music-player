class Player {
  constructor({ audioElementId }){
    this.getElements({ rootId: audioElementId });
    this.associateEventListeners();
  }

  getElements({ rootId }){
    this.root = document.querySelector(`#${rootId}`);
    this.audioSrc = this.root.querySelector('.audio-source');
    this.controls = this.root.querySelector('.controls');
    this.progressBar = this.root.querySelector('.progress-bar');
  
    this.playBtn = this.controls.querySelector('.play');
    this.pauseBtn = this.controls.querySelector('.pause');
    this.forwardBtn = this.controls.querySelector('.forward');
    this.backwardBtn = this.controls.querySelector('.backward');
  }

  toggleExecution(){
    if (this.root.classList.contains('-playing'))
      this.audioSrc.pause();
    else
      this.audioSrc.play();

    this.root.classList.toggle('-playing');
  }

  updateProgressBar(){
    const { currentTime, duration } = this.audioSrc;
    this.progressBar.style.width = `${100 * currentTime / duration}%`;
  }

  associateEventListeners(){
    const { playBtn, pauseBtn, forwardBtn, backwardBtn } = this;
    
    [playBtn, pauseBtn].forEach(action => action.addEventListener('click', () => {
      this.toggleExecution();
    }));

    forwardBtn.addEventListener('click', () => {
      this.audioSrc.currentTime += 10;
    });

    backwardBtn.addEventListener('click', () => {
      this.audioSrc.currentTime -= 10;
    });

    this.audioSrc.addEventListener('timeupdate', () => {
      this.updateProgressBar();
    });
  }
}
