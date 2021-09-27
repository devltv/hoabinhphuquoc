
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

// function createPagination(totalPages: any, page: any) {
//   let strStart = `<li class="prev">prev</li>`;
//   let strList = "";

//   // khi tổng số page nhỏ hơn 5
//   if (totalPages < 5){
//     for (var i = 1; i <= totalPages; i++) {
//       if (i == page) {
//         strList += `<li class="active" data-number="${i}">${i}</li>`;
//       }
//       else {
//         strList += `<li data-number="${i}">${i}</li>`;
//       }
//     }
//   }
//   else if ((page <= 3 || page >= totalPages - 2) && page > 0 && page <= totalPages) {
//     // trường hợp active tạo thành 1 2 3 ... 20
//     if (page <= 3) {
//       if (page == 3 && totalPages == 5){
//         for (var i = 1; i <= totalPages; i++) {
//           if (i == page) {
//             strList += `<li class="active" data-number="${i}">${i}</li>`;
//           }
//           else {
//             strList += `<li data-number="${i}">${i}</li>`;
//           }
//         }
//       }
//       else{
//         var visiblePage = page + 1;
//         if (page == 1) {
//           visiblePage = 3;
//         }
//         for (var i = 1; i <= visiblePage; i++) {
//           if (i == page) {
//             strList += `<li class="active" data-number="${i}">${i}</li>`;
//           }
//           else {
//             strList += `<li data-number="${i}">${i}</li>`;
//           }
//         }
//         strList += `<li>...</li>`;
//         strList += `<li data-number="${totalPages}">${totalPages}</li>`;
//       }
//     }
//     // trường hợp active tạo thành 1 ... 18 19 20
//     else {
//       strList += `<li data-number="1">1</li>`;
//       strList += `<li>...</li>`;

//       var visiblePage2 = page - 1;
//       if (page == totalPages) {
//         visiblePage2 = totalPages - 2;
//       }

//       for (var i = visiblePage2; i <= totalPages; i++) {
//         if (i == page) {
//           strList += `<li class="active" data-number="${i}">${i}</li>`;
//         }
//         else {
//           strList += `<li data-number="${i}">${i}</li>`;
//         }
//       }
//     }
//   }
//   // trường hợp active tạo thành 1 ... 7 8 9 ... 20
//   else if (page > 3 && page < totalPages - 2) {
//     strList += `<li data-number="1">1</li>`;
//     strList += `<li>...</li>`;
//     for (var i = page - 1; i <= page + 1; i++) {
//       if (i == page) {
//         strList += `<li class="active" data-number="${i}">${i}</li>`;
//       }
//       else {
//         strList += `<li data-number="${i}">${i}</li>`;
//       }
//     }
//     strList += `<li>...</li>`;
//     strList += `<li data-number="${totalPages}">${totalPages}</li>`;
//   }
//   else {
//     console.log("error pagination!!!");
//     return "";
//   }

//   let strEnd = `<li class="next">next</li>`;
//   return strStart.concat(strList, strEnd);
// }

// function pageAlbumImages(){
//   var boxPages = document.querySelector('#library-1__wrapper .image__section .box-pagination');
//   var htmlPage = createPagination(6, 1);
//   console.log(htmlPage);
//   boxPages.innerHTML = createPagination(6, 1);
// }

function libraryPagination() {
  if(document.getElementById('library-1')){
    
    // var options = {
    //   queryClassPagination: "#library-1__wrapper #library-1 .box-pagination",
    //   totalResult: 3
    // }
    // pagination.pagination(options)

    var options1 = {
      queryClassPagination: "#library-1__wrapper #library-1 .box-pagination",
      listBox: "#library-1__wrapper #library-1 .box-list__items--image",
      itemPages: 6,
    }
    pagination.pagination(options1)

    var options2 = {
      queryClassPagination: "#library-1__wrapper #library-2 .box-pagination",
      listBox: "#library-1__wrapper #library-2 .box-list__items",
      itemPages: 6,
    }
    pagination.pagination(options2)
  }
}

/////////////////////////////
// popup

function swiperLib() {
  if (document.querySelector('.image-popup--overlay')) {
    const sThumbs = new Swiper(".image-popup--overlay .popup-wrapper__image.active .popup-wrapper__image-thumbs", {
      spaceBetween: 12,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,

      // breakpoints:{
      //   320:{
      //     slidesPerView: 3
      //   },
      //   1025: {
      //     slidesPerView: 4
      //   }
      // },

      // watchSlidesVisibility: true,

      // lazy: true,

      // navigation: {
      //   nextEl: ".image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-button-next",
      //   prevEl: ".image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-button-prev",
      // },

      // on: {
      //   init: function () {
      //     var activeSlide = document.querySelector('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide-active');
      //     activeSlide.classList.add('active');
      //   },
      //   transitionStart: function() {
      //     var activeSlides = document.querySelectorAll('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide');
      //     activeSlides.forEach(function(item){
      //       item.classList.remove('active');
      //     })
      //   },
      //   transitionEnd: function() {
      //     var activeSlide = document.querySelector('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide-active');
      //     activeSlide.classList.add('active');
      //   }
      // }
    });

    new Swiper(".image-popup--overlay .popup-wrapper__image.active .popup-wrapper__image-swiper", {
      spaceBetween: 12,
      // slidesPerView: 1,

      navigation: {
        nextEl: ".popup-wrapper__image-swiper .swiper-button-next",
        prevEl: ".popup-wrapper__image-swiper .swiper-button-prev",
      },

      thumbs: {
        swiper: sThumbs,
      },

      on: {
        init: function () {
          var activeSlide = document.querySelector('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide-thumb-active');
          if (activeSlide){
            activeSlide.classList.add('active');
          }
        },
        transitionStart: function () {
          var activeSlides = document.querySelectorAll('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide');
          activeSlides.forEach(function (item) {
            item.classList.remove('active');
          })
        },
        transitionEnd: function () {
          var activeSlide = document.querySelector('.image-popup--overlay.show .popup-wrapper__image-thumbs .swiper-slide-thumb-active');
          if (activeSlide){
            activeSlide.classList.add('active');
          }
        }
      }
    });

    var qStr = '.image-popup--overlay.show .popup-wrapper__image-swiper .swiper-slide';

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
}

function closePopup() {
  var popup = document.querySelector('.image-popup--overlay');
  var popupVideo = document.querySelector('.video-popup--overlay');

  var body = document.querySelector('body');

  var closes = document.querySelectorAll('#library-1__wrapper .popup-close');
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

        body.classList.remove('hidden');

        popup.classList.remove('show');
        popupVideo.classList.remove('show');
        innerVideo.innerHTML = "";

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

    // var popupContent = document.querySelector('#library-1__wrapper .image-popup .popup .popup-wrapper--bg');
    var popupContent = document.querySelector('#library-1__wrapper .image-popup .popup .popup-wrapper');
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
    //         swiperLib();
    //       }

    //       return;
    //     }
    //     else {
    //       popup.classList.add('show');
    //       if (popup.classList.contains('show')) {
    //         swiperLib();
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
        // var urlItem = item.getAttribute('href');
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

        // var box = item.getAttribute('data-box');
        // var popupBoxes = document.querySelectorAll('.image-popup--overlay .popup-wrapper__image');
        // popupBoxes.forEach(function(tmp){
        //   tmp.classList.remove('active');
        // })
        // popupBoxes.forEach(function(popupItem){
        //   var boxTmp = popupItem.getAttribute('data-box');
        //   if (box === boxTmp){
        //     body.classList.add('hidden');
            
        //     popup.classList.add('show');
        //     popupItem.classList.add('active');

        //     swiperLib();
        //   }
        // })

        // history.pushState({ id: valueItem }, urlItem, urlItem);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            if (this.responseText) {
              
              popupContent.innerHTML = this.responseText;
              
              body.style.overflow = "hidden";
              popup.classList.add('show');

              swiperLib();
            }
          }
          else {
            body.style.overflow = "hidden";
            popup.classList.add('show');
            
            swiperLib();
            console.log('popup failed! ' + valueItem);
          }
        };
        xhttp.open("GET", `${urlAjax}/${valueItem}`, true);
        xhttp.send();
      })
    })
    // }

  }
}

function popupContentVideo(id: any) {
  var listVideo = document.querySelectorAll('.video__section .box-list__items');
  var innerVideo = document.querySelector('.video__section .video-popup .popup-wrapper__video')
  if (listVideo) {
    listVideo.forEach(function (item) {
      var box = item.getAttribute('data-box');
      var urlIframe = item.getAttribute('data-url');
      if (box === id) {
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
    //   //     //   swiperLib();
    //   //     // }

    //   //     closePopup();
    //   //     return;
    //   //   }
    //   //   else {
    //   //     popup.classList.add('show');
    //   //     // if (popup.classList.contains('show')){
    //   //     //   swiperLib();
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

    window.addEventListener('popstate', function (e) {
      if (e.state !== null) {
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

  // pageAlbumImages();
}