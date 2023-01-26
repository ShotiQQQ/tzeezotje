"use strict";

var swiperReviews = new Swiper('.reviews__wrapper', {
  navigation: {
    nextEl: '.arrow--next-reviews',
    prevEl: '.arrow--prev-reviews'
  },
  pagination: {
    el: '.reviews__pagination'
  }
});
var swiperPhotos = new Swiper('.photos__swiper', {
  navigation: {
    nextEl: '.arrow--next-photos',
    prevEl: '.arrow--prev-photos'
  },
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1
});
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [51.050461, 3.743162],
    zoom: 10
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [51.008176, 3.628080]
    }
  });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myGeoObject);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3dpcGVyUmV2aWV3cyIsIlN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwYWdpbmF0aW9uIiwiZWwiLCJzd2lwZXJQaG90b3MiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiY2VudGVyZWRTbGlkZXMiLCJpbml0aWFsU2xpZGUiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdCIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsIm15R2VvT2JqZWN0IiwiR2VvT2JqZWN0IiwiZ2VvbWV0cnkiLCJ0eXBlIiwiY29vcmRpbmF0ZXMiLCJiZWhhdmlvcnMiLCJkaXNhYmxlIiwiZ2VvT2JqZWN0cyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxhQUFhLEdBQUcsSUFBSUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFO0VBQ3BEQyxVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLHNCQUFzQjtJQUM5QkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNEQyxVQUFVLEVBQUU7SUFDVkMsRUFBRSxFQUFFO0VBQ047QUFDRixDQUFDLENBQUM7QUFFRixJQUFNQyxZQUFZLEdBQUcsSUFBSU4sTUFBTSxDQUFDLGlCQUFpQixFQUFFO0VBQ2pEQyxVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLHFCQUFxQjtJQUM3QkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNESSxhQUFhLEVBQUUsTUFBTTtFQUNyQkMsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxZQUFZLEVBQUU7QUFDaEIsQ0FBQyxDQUFDO0FBRUZDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUM7QUFDakIsU0FBU0EsSUFBSSxHQUFFO0VBQ2IsSUFBSUMsS0FBSyxHQUFHLElBQUlILEtBQUssQ0FBQ0ksR0FBRyxDQUFDLEtBQUssRUFBRTtJQUMvQkMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUM3QkMsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUFDO0VBRUYsSUFBSUMsV0FBVyxHQUFHLElBQUlQLEtBQUssQ0FBQ1EsU0FBUyxDQUFDO0lBQ3BDQyxRQUFRLEVBQUU7TUFDUkMsSUFBSSxFQUFFLE9BQU87TUFDYkMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVE7SUFDbkM7RUFDRixDQUFDLENBQUM7RUFFRlIsS0FBSyxDQUFDUyxTQUFTLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUM7RUFDckNWLEtBQUssQ0FBQ1csVUFBVSxDQUFDQyxHQUFHLENBQUNSLFdBQVcsQ0FBQztBQUNuQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzd2lwZXJSZXZpZXdzID0gbmV3IFN3aXBlcignLnJldmlld3NfX3dyYXBwZXInLCB7XHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmFycm93LS1uZXh0LXJldmlld3MnLFxyXG4gICAgcHJldkVsOiAnLmFycm93LS1wcmV2LXJldmlld3MnLFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcucmV2aWV3c19fcGFnaW5hdGlvbicsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJQaG90b3MgPSBuZXcgU3dpcGVyKCcucGhvdG9zX19zd2lwZXInLCB7XHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmFycm93LS1uZXh0LXBob3RvcycsXHJcbiAgICBwcmV2RWw6ICcuYXJyb3ctLXByZXYtcGhvdG9zJyxcclxuICB9LFxyXG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIGluaXRpYWxTbGlkZTogMSxcclxufSk7XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTtcclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG4gICAgY2VudGVyOiBbNTEuMDUwNDYxLCAzLjc0MzE2Ml0sXHJcbiAgICB6b29tOiAxMFxyXG4gIH0pO1xyXG5cclxuICB2YXIgbXlHZW9PYmplY3QgPSBuZXcgeW1hcHMuR2VvT2JqZWN0KHtcclxuICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgY29vcmRpbmF0ZXM6IFs1MS4wMDgxNzYsIDMuNjI4MDgwXSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcclxuICBteU1hcC5nZW9PYmplY3RzLmFkZChteUdlb09iamVjdCk7XHJcbn1cclxuXHJcbiJdfQ==
