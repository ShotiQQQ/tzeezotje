const swiperReviews = new Swiper('.reviews__wrapper', {
  navigation: {
    nextEl: '.arrow--next-reviews',
    prevEl: '.arrow--prev-reviews',
  },
});

const swiperPhotos = new Swiper('.swiper', {
  navigation: {
    nextEl: '.arrow--next-photos',
    prevEl: '.arrow--prev-photos',
  },
  slidesPerView: 'auto',
  spaceBetween: 30,
});