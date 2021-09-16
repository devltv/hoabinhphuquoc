declare var Swiper : any;
import pagination from '../layout/pagination';

function swiperRest(){
  if (document.querySelector('.restroom-popup--overlay.show')){
    var swiper = new Swiper(".restroom-popup--overlay.show .popup-wrapper__imgs-thumbs", {
      // direction: "vertical",
      spaceBetween: 12,
      slidesPerView: 3,
      // lazy: true,

      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

      // navigation: {
      //   nextEl: ".restroom-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-button-next",
      //   prevEl: ".restroom-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-button-prev",
      // },

      // on: {
      //   init: function () {
      //     var activeSlide = document.querySelector('.restroom-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide-active')
      //     // if (!activeSlide){
      //     //   activeSlide = document.querySelector('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide-active')
      //     // }
      //     activeSlide.classList.add('active')
      //   },
      //   transitionStart: function() {
      //     var activeSlides = document.querySelectorAll('.restroom-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide')
      //     activeSlides.forEach(function(item){
      //       item.classList.remove('active')
      //     })
      //   },
      //   transitionEnd: function() {
      //     var activeSlide = document.querySelector('.restroom-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide-active')
      //     // if (!activeSlide){
      //     //   activeSlide = document.querySelector('.restroom-popup.show .popup-wrapper__imgs-thumbs .swiper-slide-active')
      //     // }
      //     activeSlide.classList.add('active')
      //   }
      // }
    })

    var swiper2 = new Swiper(".restroom-popup--overlay.show .popup-wrapper__imgs-swiper", {
      spaceBetween: 12,
      slidesPerView: 1,

      navigation: {
        nextEl: ".restroom-popup--overlay.show .popup-wrapper__imgs-swiper .swiper-button-next",
        prevEl: ".restroom-popup--overlay.show .popup-wrapper__imgs-swiper .swiper-button-prev",
      },

      // zoom: true,
      // lazy: true,

      thumbs: {
        swiper: swiper,
      },
    
      on: {
        init: function () {
          var activeSlide = document.querySelector('.restroom-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        },
        transitionStart: function() {
          var activeSlides = document.querySelectorAll('.restroom-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide')
          activeSlides.forEach(function(item){
            item.classList.remove('active')
          })

        },
        transitionEnd: function() {
          var activeSlide = document.querySelector('.restroom-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        }
      }
    });
    zoomImg('.restroom-popup--overlay.show .popup-wrapper__imgs-swiper .swiper-slide');
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

function closePopup(){
  var popup = document.querySelector('.restroom-popup--overlay');
  var body = document.querySelector('body');
  var close = document.querySelector('#restroom-1 .restroom-popup .popup-close')
    
  var inpRest = document.getElementById('checkUrl');
  var closeData = "";
  if (inpRest){
    closeData = inpRest.getAttribute('data-close');
  }
  
  if (close){
    close.addEventListener('click', function(e : any){
      e.preventDefault();
      popup.classList.remove('show');
      body.style.overflow = "auto";

      if (closeData){
        history.pushState({id: null}, 'default state', closeData);
      }
    })
  }
}

function popupRest(id: any = null){
  if (document.getElementById('restroom-1')){
    var itemLinkPopups = document.querySelectorAll('#restroom-1 .restroom-box__item .box-bottom__more .btn-link--more');
    var popup = document.querySelector('.restroom-popup--overlay');
    var body = document.querySelector('body');
    var popupContent = document.querySelector('#restroom-1 .restroom-popup .popup .popup-wrapper--bg');
    
    var urlAjax = '/popup-restroom';

    closePopup();
    
    // if (id){
      
    //   localStorage.setItem('box', '');
    //   localStorage.setItem('url', '');

    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //       if (this.responseText){
    //         popupContent.innerHTML = this.responseText;
    //       }
    //       popup.classList.add('show');
    //       if (popup.classList.contains('show')){
    //         swiperRest();
    //       }

    //       return;
    //     }
    //     else {
    //       popup.classList.add('show');
    //       if (popup.classList.contains('show')){
    //         swiperRest();
    //       }

    //       console.log('popup failed!');
    //     }
    //   };
    //   xhttp.open("GET", `${urlAjax}/${id}`, true);
    //   xhttp.send();
    // }
    // else{
    //   popup.classList.remove('show');
    //   body.style.overflow = "auto";

      itemLinkPopups.forEach(function(item){
        item.addEventListener('click', function(e){
          e.preventDefault();
          var urlItem = item.getAttribute('href');
          var valueItem = "";
          var tmpItem = item;
          var count = 0;
          if (!tmpItem.getAttribute('data-box')){
            do{
              tmpItem = tmpItem.parentElement;
              ++count;
            }while(!tmpItem.getAttribute('data-box') && count < 100);
          }
          
          valueItem = tmpItem.getAttribute('data-box')
          if (!valueItem){
            console.log('Not found data-box!!');
            return;
          }

          history.pushState({id: valueItem}, urlItem, urlItem);

          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              if (this.responseText){
                popupContent.innerHTML = this.responseText;
              }

              body.style.overflow = "hidden";
              popup.classList.add('show');
              if (popup.classList.contains('show')){
                swiperRest();
              }

              return;
            }
            else {
              body.style.overflow = "hidden";
              popup.classList.add('show');
              if (popup.classList.contains('show')){
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

function loadRestroom(){
  if(document.getElementById('restroom-1')){
    var inpRest = document.getElementById('checkUrl');

    window.addEventListener('popstate', function(e){
      if (e.state !== null){
        var url = location.pathname;
        window.location.replace(`${url}`)
      }
    })

    if(localStorage.getItem('box') && localStorage.getItem('url')){
      var boxLocal = localStorage.getItem('box');
      var urlLocal = localStorage.getItem('url');
     
      history.pushState({id: boxLocal}, urlLocal, urlLocal);
      popupRest(boxLocal);

      // localStorage.setItem('box', '');
      // localStorage.setItem('url', '');
    }

    else if (inpRest) {
      var val = inpRest.getAttribute('data-url');
      var id = inpRest.getAttribute('data-box');

      history.pushState({ id }, val, val);

      inpRest.setAttribute('data-box', `${id}`);
      inpRest.setAttribute('data-url', `${val}`);

      if (val && id) {
        popupRest(id);
      }
    }
    popupRest();
  }
}


export const restroom = function (){
  rest1();
  loadRestroom();
}