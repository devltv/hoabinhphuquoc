declare var Swiper: any;

function service4() {
  if (document.getElementById('service-4')) {
    new Swiper(".imgs-swiper", {
      slidesPerView: 3,
      spaceBetween: 18,
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
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        541: {
          slidesPerView: 1.25,
          spaceBetween: 8,
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1281: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1441: {
          slidesPerView: 3,
          spaceBetween: 18
        },
        1681: {
          slidesPerView: 3,
          spaceBetween: 18
        }
      }
    });
  }
}

export const service = function(){
  service4();
}