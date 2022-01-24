declare var Swiper: any;
function bannerSlide() {
    if (document.getElementById('banner')) {
      new Swiper(`.slide-banner  .swiper-container`, {
        slidesPerView: 1,
        spaceBetween: 0,
        // loop: true,
        autoplay: true,
        deplay: 3000,
        pagination: {
          el: ".swiper-pagination",
  
        },
      });
    }
  }
  function subbannerPosition(){
    var header = document.querySelector('header');
    var hHeader = header.offsetHeight;
    var banner = document.getElementById('banner');
    var bannerSub = document.getElementById('bannerSub');
    var booking = document.getElementById('booking');

    if (bannerSub){
      bannerSub.style.marginTop = `${hHeader}px`;
    }
    if (banner){
      banner.style.marginTop = `${hHeader}px`;
    }
    if (booking){
      booking.style.paddingTop = `${hHeader}px`;
    }
  
    window.addEventListener('resize', function(e){
      // resize sub banner
      setTimeout(function(){
        var hHeaderResize = header.offsetHeight;
    
        if (banner){
          banner.style.marginTop = `${hHeaderResize}px`;
        }
        if (bannerSub){
          bannerSub.style.marginTop = `${hHeaderResize}px`;
        }
        if (booking){
          booking.style.paddingTop = `${hHeaderResize}px`;
        }
      }, 600);
    })
  }
export const banner = function () {
  bannerSlide();
  subbannerPosition();
  }