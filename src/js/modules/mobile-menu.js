const mobileBtn = () => {
  // mobile menu button
  $('.header-nav .mobile-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('opened');
    $('.header-nav-list').toggleClass('show');
  });
};

export default mobileBtn;
