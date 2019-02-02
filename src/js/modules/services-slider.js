const servicesSlider = () => {
  if ($(window).width() > 980) {
    const mySwiper = new Swiper('.services-swiper', {
      loop: true,
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    $('.services-swiper .swiper-wrapper').removeAttr('style');
    $('.services-swiper .swiper-slide').removeAttr('style');
  }
};


export default servicesSlider;
