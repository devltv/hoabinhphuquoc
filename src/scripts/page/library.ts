
import pagination from "../layout/pagination";
declare var Swiper: any;

function getYtb() {
  var items = document.querySelectorAll('#library-1__wrapper .video__section .box-list__items');
  if (items) {
    items.forEach(function (item) {
      var srcImg = item.getAttribute('data-url');
      var altImg = item.getAttribute('data-alt');
      var play = item.getAttribute('data-play');
      var dtHref = item.getAttribute('data-href');

      if (altImg) {
        item.innerHTML = `<img class="lazyload" src="https://img.youtube.com/vi/${srcImg}/maxresdefault.jpg" alt="${altImg}" />`;
      }
      else {
        item.innerHTML = `<img class="lazyload" src="https://img.youtube.com/vi/${srcImg}/maxresdefault.jpg" alt="" />`;
      }

      if (play) {
        item.innerHTML += `<a class="play-link" href="${dtHref}"><img class="lazyload play-img" src="${play}" alt="play" /></a>`;
      }
    })
  }
}


function libraryPagination() {
  // if(document.getElementById('library-1')){
  var options = {
    queryClassPagination: "#library-1__wrapper #library-1 .box-pagination",
    listBox: "#library-1__wrapper #library-1 .box-list__items--image",
    itemPages: 6,
  }
  pagination.pagination(options)

  var options = {
    queryClassPagination: "#library-1__wrapper #library-2 .box-pagination",
    listBox: "#library-1__wrapper #library-2 .box-list__items",
    itemPages: 6,

  }
  pagination.pagination(options)
  // }
}

/////////////////////////////
// popup

function swiperRest() {
  if (document.querySelector('.image-popup--overlay.show')) {
    var swiper = new Swiper(".image-popup--overlay.show .popup-wrapper__image-thumbs", {
      spaceBetween: 12,
      slidesPerView: 3,

      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

      // lazy: true,

      // navigation: {
      //   nextEl: ".image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-button-next",
      //   prevEl: ".image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-button-prev",
      // },

      // on: {
      //   init: function () {
      //     var activeSlide = document.querySelector('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide-active')
      //     activeSlide.classList.add('active')
      //   },
      //   transitionStart: function() {
      //     var activeSlides = document.querySelectorAll('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide')
      //     activeSlides.forEach(function(item){
      //       item.classList.remove('active')
      //     })
      //   },
      //   transitionEnd: function() {
      //     var activeSlide = document.querySelector('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide-active')
      //     activeSlide.classList.add('active')
      //   }
      // }
    })

    var swiper2 = new Swiper(".image-popup--overlay.show .popup-wrapper__image-swiper", {
      spaceBetween: 12,
      slidesPerView: 1,

      navigation: {
        nextEl: ".image-popup--overlay.show .popup-wrapper__image-swiper .swiper-button-next",
        prevEl: ".image-popup--overlay.show .popup-wrapper__image-swiper .swiper-button-prev",
      },

      // zoom: true,
      // lazy: true,

      thumbs: {
        swiper: swiper,
      },

      on: {
        init: function () {
          var activeSlide = document.querySelector('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        },
        transitionStart: function () {
          var activeSlides = document.querySelectorAll('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide')
          activeSlides.forEach(function (item) {
            item.classList.remove('active')
          })
        },
        transitionEnd: function () {
          var activeSlide = document.querySelector('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        }
      }
    });
    zoomImg('.image-popup--overlay.show .popup-wrapper__image-swiper .swiper-slide');
  }
}


function zoomImg(qStr: string) {
  var listItem = document.querySelectorAll(qStr);
  listItem.forEach(function (item) {
    item.addEventListener('click', function (e: MouseEvent) {
      var imgItem = item.getElementsByTagName('img')[0];
      if (!imgItem.classList.contains('scale')) {
        var pex = e.offsetX;
        var pey = e.offsetY;

        imgItem.style.transformOrigin = `${pex}px ${pey}px`;
        imgItem.classList.add('scale');
        imgItem.style.cursor = "zoom-out";
      }
      else {
        imgItem.style.transformOrigin = "";
        imgItem.classList.remove('scale');
        imgItem.style.cursor = "zoom-in";
      }
    })
  })
}

function closePopup() {
  var popup = document.querySelector('.image-popup--overlay');
  var popupVideo = document.querySelector('.video-popup--overlay');

  var body = document.querySelector('body');

  var closes = document.querySelectorAll('#library-1__wrapper .popup-close')
  // var closeVideo = document.querySelector('#library-1__wrapper .video-popup .popup-close')

  var inpRest = document.getElementById('checkUrl');
  var inpRestVideo = document.getElementById('checkUrlVideo');
  var closeData = "";
  
  if (inpRest) {
    closeData = inpRest.getAttribute('data-close');
  }
  if (inpRestVideo) {
    closeData = inpRest.getAttribute('data-close');
  }
  
  var innerVideo = document.querySelector('.video__section .video-popup .popup-wrapper__video');


  if (closes) {
    closes.forEach(function (close) {
      close.addEventListener('click', function (e: any) {
        e.preventDefault();
        popup.classList.remove('show');
        popupVideo.classList.remove('show');
        innerVideo.innerHTML = "";
        body.style.overflow = "auto";

        if (closeData) {
          // history.pushState({ id: null }, 'default state', closeData);
        }
      })
    })
  }
}


function popupImage(id: any = null) {
  if (document.getElementById('library-1__wrapper')) {
    var itemLinkPopups = document.querySelectorAll('#library-1__wrapper .image__section .box-list .box-list__items--image');
    var popup = document.querySelector('.image-popup--overlay');

    var body = document.querySelector('body');

    var popupContent = document.querySelector('#library-1__wrapper .image-popup .popup .popup-wrapper--bg');
    var urlAjax = '/popup-image';

    // if (id) {
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //       if (this.responseText) {
    //         popupContent.innerHTML = this.responseText;
    //       }
    //       popup.classList.add('show');
    //       if (popup.classList.contains('show')) {
    //         swiperRest();
    //       }

    //       return;
    //     }
    //     else {
    //       popup.classList.add('show');
    //       if (popup.classList.contains('show')) {
    //         swiperRest();
    //       }

    //       console.log('popup failed!');
    //     }
    //   };
    //   xhttp.open("GET", `${urlAjax}/${id}`, true);
    //   xhttp.send();
    // }
    // else {
    //   popup.classList.remove('show');
    //   body.style.overflow = "auto";
  
      itemLinkPopups.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          var urlItem = item.getAttribute('href');
          var valueItem = "";
          var tmpItem = item;
          var count = 0;
          if (!tmpItem.getAttribute('data-box')) {
            do {
              tmpItem = tmpItem.parentElement;
              ++count;
            } while (!tmpItem.getAttribute('data-box') && count < 100);
          }
  
          valueItem = tmpItem.getAttribute('data-box')
          if (!valueItem) {
            console.log('Not found data-box!!');
            return;
          }
  
          // history.pushState({ id: valueItem }, urlItem, urlItem);
  
          var xhttp = new XMLHttpRequest();
  
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              if (this.responseText) {
                popupContent.innerHTML = this.responseText;
              }
  
              body.style.overflow = "hidden";
              popup.classList.add('show');
              if (popup.classList.contains('show')) {
                swiperRest();
              }
  
              return;
            }
            else {
              body.style.overflow = "hidden";
              popup.classList.add('show');
              if (popup.classList.contains('show')) {
                swiperRest();
              }
  
              console.log('popup failed!');
            }
          };
          xhttp.open("GET", `${urlAjax}/${valueItem}`, true);
          xhttp.send();
        })
      })
    // }

  }
}

function popupContentVideo(id: any){
  var listVideo = document.querySelectorAll('.video__section .box-list__items');
  var innerVideo = document.querySelector('.video__section .video-popup .popup-wrapper__video')
  if (listVideo){
    listVideo.forEach(function(item){
      var box = item.getAttribute('data-box');
      var urlIframe = item.getAttribute('data-url');
      if (box === id){
        innerVideo.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${urlIframe}"></iframe>`
      }
    })
  }
}

function popupVideo(id: any = null) {
  if (document.getElementById('library-1__wrapper')) {
    var itemLinkPopups = document.querySelectorAll('#library-1__wrapper .video__section .box-list .box-list__items .play-link');
    var popup = document.querySelector('.video-popup--overlay');
    var body = document.querySelector('body');

    // var popupContent = document.querySelector('#library-1__wrapper .video-popup .popup');
    // var urlAjax = './popup-video';

    // if (id) {
    //   popupContentVideo(id);
    //   popup.classList.add('show');

    //   // var xhttp = new XMLHttpRequest();
    //   // xhttp.onreadystatechange = function () {
    //   //   if (this.readyState == 4 && this.status == 200) {
    //   //     if (this.responseText) {
    //   //       popupContent.innerHTML = this.responseText;
    //   //     }
    //   //     popup.classList.add('show');
    //   //     // if (popup.classList.contains('show')){
    //   //     //   swiperRest();
    //   //     // }

    //   //     closePopup();
    //   //     return;
    //   //   }
    //   //   else {
    //   //     popup.classList.add('show');
    //   //     // if (popup.classList.contains('show')){
    //   //     //   swiperRest();
    //   //     // }

    //   //     console.log('popup failed!');
    //   //   }
    //   // };
    //   // xhttp.open("GET", `${urlAjax}/${id}`, true);
    //   // xhttp.send();
    // }
    // else {
      // popup.classList.remove('show');
      // body.style.overflow = "auto";
      

      itemLinkPopups.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          var urlItem = item.getAttribute('href');
          var valueItem = "";
          var tmpItem = item;
          var count = 0;
          if (!tmpItem.getAttribute('data-box')) {
            do {
              tmpItem = tmpItem.parentElement;
              ++count;
            } while (!tmpItem.getAttribute('data-box') && count < 100);
          }
  
          valueItem = tmpItem.getAttribute('data-box')
          if (!valueItem) {
            console.log('Not found data-box!!');
            return;
          }
          popupContentVideo(valueItem);
          popup.classList.add('show');

          // history.pushState({ id: valueItem }, urlItem, urlItem);
  
          // var xhttp = new XMLHttpRequest();
  
          // xhttp.onreadystatechange = function () {
          //   if (this.readyState == 4 && this.status == 200) {
          //     if (this.responseText) {
          //       popupContent.innerHTML = this.responseText;
          //     }
  
          //     body.style.overflow = "hidden";
          //     popup.classList.add('show');
              
          //     closePopup();
  
          //     return;
          //   }
          //   else {
          //     body.style.overflow = "hidden";
          //     popup.classList.add('show');
  
          //     console.log('popup failed!');
          //   }
          // };
          // xhttp.open("GET", `${urlAjax}/${valueItem}`, true);
          // xhttp.send();
        })
      })
    // }
  }
}


function loadRestroom() {
  if (document.getElementById('library-1__wrapper')) {

    var inpRest = document.getElementById('checkUrl');

    // history.pushState({ id: null }, 'default state', close);

    window.addEventListener('popstate', function(e){
      if (e.state !== null){
        var url = location.pathname;
        window.location.replace(`${url}`)
      }
    })

    if (inpRest) {
      var popup = inpRest.getAttribute('data-popup');
      var val = inpRest.getAttribute('data-url');
      var id = inpRest.getAttribute('data-box');

      // history.pushState({ id }, val, val);

      inpRest.setAttribute('data-box', `${id}`);
      inpRest.setAttribute('data-url', `${val}`);
      inpRest.setAttribute('data-popup', `${popup}`);

      if (popup === 'image') {
        if (val && id) {
          popupImage(id);
        }
      }
      else {
        if (val && id) {
          popupVideo(id);
        }
      }
    }

    closePopup();
    
    popupImage();
    popupVideo();
  }
}



// function selectedBox(id: any) {
//   popupImage(id);
// }


export const library = function () {
  libraryPagination();
  getYtb();


  loadRestroom();
}