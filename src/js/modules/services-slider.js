const servicesSlider = () => {
  if ($(window).width() > 980) {
    const mySwiper = new Swiper('.services-swiper .swiper-container', {
      loop: true,
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

export default servicesSlider;
