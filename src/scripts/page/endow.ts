import pagination from '../layout/pagination';
declare var Swiper: any;

function endow1() {
  if (!document.getElementById('endow-1')) {
    return;
  }
  // var slideActive = document.querySelectorAll('.endow-1 .endow__right .active .endow-box');
  var options = {
    queryClassPagination: '.endow-1 .endow__right .endow__slide.active .box-pagination',
    listBox: '.endow-1 .endow__right .endow__slide.active .endow-box',
    itemPages: 1,
  }

  pagination.pagination(options);
}

function toggleEndow1() {
  if (!document.getElementById('endow-1')) {
    return;
  }

  var listTitle = document.querySelectorAll('.endow-1 .endow__left--items .endow__left--desc');
  var active = document.querySelector('.endow-1 .endow__left--items .endow__left--desc.active');
  var listRight = document.querySelectorAll('.endow-1 .endow__right .endow__slide');
  
  listRight.forEach(function (right) {
    right.classList.remove('active');
  })
  listRight.forEach(function(right){
    if (right.getAttribute('data-active') === active.getAttribute('data-active')){
      right.classList.add('active');
    }
  })
  
  endow1();

  listTitle.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      listTitle.forEach(function (temp) {
        temp.classList.remove('active');
      })

      var iActive = this.getAttribute('data-active');
      this.classList.add('active');

      listRight.forEach(function (right) {
        right.classList.remove('active');
      })

      listRight.forEach(function (itemRight) {
        var iActiveRight = itemRight.getAttribute('data-active');
        if (iActive === iActiveRight) {
          itemRight.classList.add('active');

          endow1();
        }
      })


    })
  })
}


function swiperRest() {
  if (document.querySelector('.total-popup--overlay.show')) {
    var swiper = new Swiper(".total-popup--overlay.show .popup-wrapper__imgs-thumbs", {
      // direction: "vertical",
      spaceBetween: 12,
      slidesPerView: 3,
      // lazy: true,

      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    })

    var swiper2 = new Swiper(".total-popup--overlay.show .popup-wrapper__imgs-swiper", {
      spaceBetween: 12,
      slidesPerView: 1,

      navigation: {
        nextEl: ".total-popup--overlay.show .popup-wrapper__imgs-swiper .swiper-button-next",
        prevEl: ".total-popup--overlay.show .popup-wrapper__imgs-swiper .swiper-button-prev",
      },

      // zoom: true,
      // lazy: true,

      thumbs: {
        swiper: swiper,
      },

      on: {
        init: function () {
          var activeSlide = document.querySelector('.total-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        },
        transitionStart: function () {
          var activeSlides = document.querySelectorAll('.total-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide')
          activeSlides.forEach(function (item) {
            item.classList.remove('active')
          })

        },
        transitionEnd: function () {
          var activeSlide = document.querySelector('.total-popup--overlay.show .popup-wrapper__imgs-thumbs .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        }
      }
    });
    zoomImg('.total-popup--overlay.show .popup-wrapper__imgs-swiper .swiper-slide');
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
  var popup = document.querySelector('.total-popup--overlay');
  var body = document.querySelector('body');
  var close = document.querySelector('#endow-1 .total-popup .popup-close')

  var inpRest = document.getElementById('checkUrl');
  var closeData = "";
  if (inpRest){
    closeData = inpRest.getAttribute('data-close');
  }

  if (close) {
    close.addEventListener('click', function (e: any) {
      e.preventDefault();
      popup.classList.remove('show');
      body.style.overflow = "auto";

      if (closeData){
        history.pushState({id: null}, 'default state', closeData);
      }
    })
  }
}

function popupTotal(id: any = null, url: any = null) {
  if (document.getElementById('endow-1')) {
    var itemLinkPopups = document.querySelectorAll('#endow-1 .endow-1 .endow__content .endow-box__list .endow-box__more .btn-link--more');
    var popup = document.querySelector('.total-popup--overlay');
    var body = document.querySelector('body');
    var popupContent = document.querySelector('#endow-1 .total-popup .popup .popup-wrapper--bg');

    // var urlAjax = '';

    closePopup();

    if (id) {
      localStorage.setItem('box', '');
      localStorage.setItem('url', '');

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.responseText) {
            popupContent.innerHTML = this.responseText;
          }
          popup.classList.add('show');
          if (popup.classList.contains('show')) {
            swiperRest();
          }

          return;
        }
        else {
          popup.classList.add('show');
          if (popup.classList.contains('show')) {
            swiperRest();
          }

          console.log('popup failed!');
        }
      };
      xhttp.open("GET", `${url}/${id}`, true);
      xhttp.send();
    }
    else {
      popup.classList.remove('show');
      body.style.overflow = "auto";

      itemLinkPopups.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          var urlItem = item.getAttribute('href');
          var valueItem = "";
          var tmpItem = item;
          var count = 0;

          var ajItem = item;
          var urlAjax = "";

          if (!tmpItem.getAttribute('data-box')) {
            do {
              tmpItem = tmpItem.parentElement;
              ++count;
            } while (!tmpItem.getAttribute('data-box') && count < 100);
          }

          valueItem = tmpItem.getAttribute('data-box')
          // if (!valueItem) {
          //   console.log('Not found data-box!!');
          //   return;
          // }
          count = 0;

          if (!ajItem.getAttribute('data-url')) {
            do {
              ajItem = ajItem.parentElement;
              ++count;
            } while (ajItem.parentElement && !ajItem.getAttribute('data-url') && count < 100 && !ajItem.getAttribute('data-active'));
          }

          urlAjax = ajItem.getAttribute('data-url')
          if (urlAjax && valueItem) {
            history.pushState({ id: valueItem }, urlItem, urlItem);

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
          }
          else {
            console.log('Not found data-url or data-box!!');
          }
        })
      })
    }
  }
}


function loadTotal() {
  if (document.getElementById('endow-1')) {
    var inpRest = document.getElementById('checkUrl');

    window.addEventListener('popstate', function (e) {
      if (e.state !== null) {
        var url = location.pathname;
        window.location.replace(`${url}`)
      }
    })

    // if (localStorage.getItem('box') && localStorage.getItem('url')) {
    //   var boxLocal = localStorage.getItem('box');
    //   var urlLocal = localStorage.getItem('url');

    //   history.pushState({ id: boxLocal }, urlLocal, urlLocal);
    //   popupTotal(boxLocal, urlLocal);

    //   // localStorage.setItem('box', '');
    //   // localStorage.setItem('url', '');
    // }

    // else 

    if (inpRest) {
      var val = inpRest.getAttribute('data-url');
      var id = inpRest.getAttribute('data-box');
      var ajax = inpRest.getAttribute('data-ajax');

      history.pushState({ id }, val, val);

      inpRest.setAttribute('data-box', ``);
      inpRest.setAttribute('data-url', ``);

      if (ajax && id) {
        popupTotal(id, ajax);
      }
    }
    popupTotal();
  }
}

export default {
  endow: function () {
    toggleEndow1();

    loadTotal();
  }
}