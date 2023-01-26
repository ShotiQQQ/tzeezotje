const swiperReviews = new Swiper('.reviews__wrapper', {
  navigation: {
    nextEl: '.arrow--next-reviews',
    prevEl: '.arrow--prev-reviews',
  },
  pagination: {
    el: '.reviews__pagination',
  },
});

const swiperPhotos = new Swiper('.photos__swiper', {
  navigation: {
    nextEl: '.arrow--next-photos',
    prevEl: '.arrow--prev-photos',
  },
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
});

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [51.050461, 3.743162],
    zoom: 10
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [51.008176, 3.628080],
    }
  });

  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myGeoObject);
}

const burger = document.querySelector('.header__burger');
const close = document.querySelector('.header__close');
const mobileMenu = document.querySelector('.header__mobile');
const mobileLinks = document.querySelectorAll('.nav__link--mobile');

burger.addEventListener('click', () => {
  mobileMenu.classList.add('header__mobile--active');
})

close.addEventListener('click', () => {
  mobileMenu.classList.remove('header__mobile--active');
})

mobileLinks.forEach((e) => {
  e.addEventListener('click', () => {
    mobileMenu.classList.remove('header__mobile--active');
  })
})

