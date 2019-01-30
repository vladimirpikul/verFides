const servicesSlider = () => {
  const mySwiper = new Swiper('.services-swiper', {
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export default servicesSlider;
