const videoControls = () => {
  const videoEl = document.getElementsByClassName('header-video')[0];
  $('.header-video-control').click((e) => {
    e.preventDefault();
    $('.header-video-control .control-img').toggleClass('show');
    if (videoEl.paused) {
      videoEl.play();
      $('.header-video-control .control-text').text('Pause');
    } else {
      videoEl.pause();
      $('.header-video-control .control-text').text('Play');
    }
  });
};

export default videoControls;
