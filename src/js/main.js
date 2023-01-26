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
const order = document.querySelector('.btn--hero');
const modal = document.querySelector('.modal');
const send = document.querySelector('.btn--modal');
const forms = document.querySelectorAll('form');

forms.forEach((e) => {
  e.addEventListener('submit', (e) => {
    e.preventDefault();
  })
})

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


modal.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.id === 'wrapper') {
    modal.classList.remove('modal--active');
  }
})
order.addEventListener('click', () => {
  modal.classList.add('modal--active');
})

send.addEventListener('click', () => {
  let data = [];
  let name = document.querySelector('#name2').value;
  let email = document.querySelector('#email2').value;
  let request = document.querySelector('#request2').value;

  if (name.length > 0 && email.length > 0 && request.length > 0) {
    data.push(name);
    data.push(email);
    data.push(request);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
})