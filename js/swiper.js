const swiper = new Swiper('.swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,
});