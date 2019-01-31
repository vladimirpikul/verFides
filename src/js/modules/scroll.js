const headerScroll = () => {
  $('.scroll-btn').click((e) => {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($(window).height()),
    }, 1500);
  });
};

export default headerScroll;
