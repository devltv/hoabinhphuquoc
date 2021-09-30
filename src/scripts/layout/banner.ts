declare var Swiper: any;
function bannerSlide() {
    if (document.getElementById('banner')) {
      new Swiper(`.slide-banner  .swiper-container`, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        deplay: 3000,
        pagination: {
          el: ".swiper-pagination",
  
        },
      });
    }
  }
export const banner = function () {
  bannerSlide();
  }