declare var Swiper:any;

function index2(){
  if (document.getElementById('index2')){
    new Swiper(".index-restroom--swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints:{
        }
      });
  }
}

export default {
    index: function(){
      index2();
    }
  }