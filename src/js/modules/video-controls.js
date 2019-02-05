const videoControls = () => {
  const videoEl = $('.header-video')[0];
  const controlBtn = $('.header-video-control');
  const controlIcon = controlBtn.find('.control-icon');
  const controlText = controlBtn.find('.control-text');

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
