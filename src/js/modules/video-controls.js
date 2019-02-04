const videoControls = () => {
  const videoEl = $('.header-video')[0];
  const controlIcon = $('.header-video-control .control-icon');
  const controlText = $('.header-video-control .control-text');
  const controlBtn = $('.header-video-control');

  controlBtn.click((e) => {
    e.preventDefault();
    controlIcon.toggleClass('show');
    if (videoEl.paused) {
      videoEl.play();
      controlText.text('Pause');
    } else {
      videoEl.pause();
      controlText.text('Play');
    }
  });
};

export default videoControls;
