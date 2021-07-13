declare var Swiper:any;

function index2(){
  if (document.getElementById('index2')){
    new Swiper(".index-restroom--swiper", {
        slidesPerView: 1,
        spaceBetween: 8,
        // slidesPerGroup: 3,
        // loop: true,
        // loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints:{
          541:{
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          769:{
            slidesPerView: 2,
            spaceBetween: 8,
          },
          1281:{
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1441:{
            slidesPerView: 3,
          },
          1681:{
            spaceBetween: 18
          }
        }
      });
  }
}

export default {
    index: function(){
      index2();
    }
  }