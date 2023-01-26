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

