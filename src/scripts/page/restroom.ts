declare var Swiper : any;
import pagination from '../layout/pagination';

function swiperRest(){
  if (document.querySelector('.restroom-popup.show')){
    var swiper = new Swiper(".restroom-popup.show .popup-wrapper__imgs-thumbs", {
      // direction: "vertical",
      spaceBetween: 12,
      slidesPerView: 3,
      // lazy: true,

      navigation: {
        nextEl: ".restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-button-next",
        prevEl: ".restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-button-prev",
      },

      on: {
        init: function () {
          var activeSlide = document.querySelector('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide-active')
          // if (!activeSlide){
          //   activeSlide = document.querySelector('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide-active')
          // }
          activeSlide.classList.add('active')
        },
        transitionStart: function() {
          var activeSlides = document.querySelectorAll('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide')
          activeSlides.forEach(function(item){
            item.classList.remove('active')
          })
        },
        transitionEnd: function() {
          var activeSlide = document.querySelector('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide-active')
          // if (!activeSlide){
          //   activeSlide = document.querySelector('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide-active')
          // }
          activeSlide.classList.add('active')
        }
      }
    })

    var swiper2 = new Swiper(".restroom-popup.show .popup-wrapper__imgs-swiper", {
      spaceBetween: 12,
      slidesPerView: 1,

      navigation: {
        nextEl: ".restroom-popup.show .popup-wrapper__imgs-swiper .swiper-button-next",
        prevEl: ".restroom-popup.show .popup-wrapper__imgs-swiper .swiper-button-prev",
      },

      // zoom: true,
      // lazy: true,

      thumbs: {
        swiper: swiper,
      },
    
      on: {
        init: function () {
          var activeSlide = document.querySelector('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        },
        transitionStart: function() {
          var activeSlides = document.querySelectorAll('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide')
          activeSlides.forEach(function(item){
            item.classList.remove('active')
          })

        },
        transitionEnd: function() {
          var activeSlide = document.querySelector('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        }
      }
    });
    zoomImg('.restroom-popup.show .popup-wrapper__imgs-swiper .swiper-slide');
  }
}

function zoomImg(qStr : string){
  var listItem = document.querySelectorAll(qStr);
  listItem.forEach(function(item){
    item.addEventListener('click', function(e: MouseEvent){
      var imgItem = item.getElementsByTagName('img')[0];
      if (!imgItem.classList.contains('scale')){
        var pex = e.offsetX;
        var pey = e.offsetY;
  
        imgItem.style.transformOrigin = `${pex}px ${pey}px`;
        imgItem.classList.add('scale');
        imgItem.style.cursor = "zoom-out";
      }
      else{
        imgItem.style.transformOrigin = "";
        imgItem.classList.remove('scale');
        imgItem.style.cursor = "zoom-in";
      }
    })
  })
}


function rest1(){
  if (!document.getElementById('restroom-1')){
    return;
  }
  // var slideActive = document.querySelectorAll('.endow-1 .endow__right .active .endow-box');
  var options = {
    queryClassPagination: '.restroom-1 .restroom .box-pagination',
    listBox: '.restroom-1 .restroom .restroom-box__item',
    itemPages: 6,
    scroll: {
			id: 'restroomListBox',
			header: '#header',
		},
  }
  pagination.pagination(options);
}

export const restroom = function (){
  rest1();
  swiperRest();
}