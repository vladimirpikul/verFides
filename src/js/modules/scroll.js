const headerScroll = () => {
  $('.scroll-btn').click((e) => {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($(window).height()),
    }, 2000);
  });
};

export default headerScroll;
