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
    // var banners = document.querySelectorAll('.banner');
    var header = document.querySelector('header');
    var hHeader = header.offsetHeight;
    var banner = document.getElementById('banner');
    var bannerSub = document.getElementById('bannerSub');
    // var sectionBanner = document.getElementById('bannerSub');
  
    // banners.forEach(function(item){
    //   // if (item.classList.contains('banner-sub')){
    //   //   sectionBanner.style.marginTop = `${hHeader}px`;
    //   // }
    // })
  
    // var spaces = document.querySelectorAll('.space-header');
    // spaces.forEach(function(item){
    //   var itemE = <HTMLElement> item;
    //   itemE.style.marginTop = `${hHeader}px`;
    // })
  

    // var classBanner = document.querySelectorAll('.banner');
    // var classBannerSub = document.querySelectorAll('.banner-sub');
    if (bannerSub){
      bannerSub.style.marginTop = `${hHeader}px`;
      // if (window.innerWidth > 1336){
      //   classBannerSub.forEach(function(item){
      //     var itemE = <HTMLElement> item;
      //     itemE.style.marginTop = `calc(100vh - ${hHeader}px)`;
      //   })
      // }
      // else{
      //   classBannerSub.forEach(function(item){
      //     var itemE = <HTMLElement> item;
      //     itemE.style.marginTop = ``;
      //   })
      // }
    }
    if (banner){
      banner.style.marginTop = `${hHeader}px`;
      // // if (window.innerWidth > 1336){
      // //   classBanner.forEach(function(item){
      // //     var itemE = <HTMLElement> item;
      // //     itemE.style.marginTop = `calc(100vh - ${hHeader}px)`;
      // //   })
      // }
      // else{
      //   classBanner.forEach(function(item){
      //     var itemE = <HTMLElement> item;
      //     itemE.style.marginTop = ``;
      //   })
      // }
    }
  
    window.addEventListener('resize', function(e){
      // resize sub banner
      console.log(header.offsetHeight);
      setTimeout(function(){
        var hHeaderResize = header.offsetHeight;
    
        // banners.forEach(function(item){
        //   if (item.classList.contains('banner-sub')){
        //     sectionBanner.style.marginTop = `${hHeaderResize}px`;
        //   }
        // })
        // resize space header
        // spaces.forEach(function(item){
        //   var itemE = <HTMLElement> item;
        //   itemE.style.marginTop = `${hHeaderResize}px`;
        // })
        // resize banner
        if (banner){
          banner.style.marginTop = `${hHeaderResize}px`;
  
          // if (window.innerWidth > 1336){
          //   classBanner.forEach(function(item){
          //     var itemE = <HTMLElement> item;
          //     itemE.style.marginTop = `calc(100vh - ${hHeader}px)`;
          //   })
          // }
          // else{
          //   classBanner.forEach(function(item){
          //     var itemE = <HTMLElement> item;
          //     itemE.style.marginTop = ``;
          //   })
          // }
        }
        if (bannerSub){
          bannerSub.style.marginTop = `${hHeaderResize}px`;
          // if (window.innerWidth > 1336){
          //   classBannerSub.forEach(function(item){
          //     var itemE = <HTMLElement> item;
          //     itemE.style.marginTop = `calc(100vh - ${hHeader}px)`;
          //   })
          // }
          // else{
          //   classBannerSub.forEach(function(item){
          //     var itemE = <HTMLElement> item;
          //     itemE.style.marginTop = ``;
          //   })
          // }
        }
      }, 600);
    })
  }
export const banner = function () {
  bannerSlide();
  subbannerPosition();
  }