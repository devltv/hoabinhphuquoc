declare var Swiper: any;
function index1(){
  if (document.getElementById('index1')) {
    new Swiper(`.index-intro  .content-intro--swiper`, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
          el: ".swiper-pagination",

        },
    });
  }
}

function index2() {
  if (document.getElementById('index2')) {
    new Swiper(".index-restroom .index-restroom--swiper", {
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
        nextEl: ".index-restroom .swiper-button-next",
        prevEl: ".index-restroom .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        541: {
          slidesPerView: 1.5,
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
        },
        1681: {
          spaceBetween: 18
        }
      }
    });

    // localStorage.setItem('box', '3');
    // localStorage.setItem('url', '/restroom/box-3');

    var moreLinks = document.querySelectorAll('#index2 .restroom-box .btn-link--more');
    moreLinks.forEach(function(link){
      link.addEventListener('click', function(e){
        var hr = link.getAttribute('data-href');
        localStorage.setItem('url', `${hr}`);

        var valueItem = "";
        var tmpItem = link;
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
          e.preventDefault();
          return false;
        }

        localStorage.setItem('box', `${valueItem}`);

        console.log(valueItem, hr);
        return true;
      })
    })
  }
}
function swiperIndex3() {
  if (document.getElementById('index3')) {
    new Swiper(`.index-endow .active .endow--swiper`, {
      slidesPerView: 1,
      navigation: {
        nextEl: `.index-endow .active .swiper-button-next`,
        prevEl: `.index-endow .active .swiper-button-prev`,
      },
    });
  }
}
function toggleIndex3() {
  if (document.getElementById('index3')) {
    var contentList = document.querySelectorAll(".endow__content .endow__left--desc");
    var contentRight = document.querySelectorAll(".endow__content .endow__slide");
    var active = document.querySelector(".endow__content .active");

    if (!contentList) {
      return;
    }

    var itemActive = active.getAttribute('data-active');
    contentRight.forEach(function (itemRight) {
      var itemRightActive = itemRight.getAttribute('data-active');
      if (itemActive == itemRightActive) {
        var itemRightEle = <HTMLElement>itemRight;
        itemRightEle.classList.add('active');

        swiperIndex3();

      } else {
        var itemRightEle = <HTMLElement>itemRight;
        itemRightEle.classList.remove('active');
      }

    })

    contentList.forEach(function (item) {
      item.addEventListener('click', function () {
        var itemActive = item.getAttribute('data-active');

        contentRight.forEach(function (itemRight) {
          var itemRightEle = <HTMLElement>itemRight;
          // itemRightEle.style.display = "none";
          itemRightEle.classList.remove('active');
        })

        contentRight.forEach(function (itemRight) {

          var itemRightActive = itemRight.getAttribute('data-active');
          var itemRightEle = <HTMLElement>itemRight;
          if (itemActive == itemRightActive) {
            // itemRightEle.style.display = "block";
            itemRightEle.classList.add('active');

            swiperIndex3();
          }
        })


        contentList.forEach(function (e) {
          e.classList.remove("active");
        })

        // them active vao item da click
        item.classList.add("active");
      })
    })
  }
}

function toggleIndex4() {
  if (document.getElementById('index4')) {
    var contentLeft = document.querySelectorAll(".index-uilities__box .index-uilities__boxleft ");
    var contentList = document.querySelectorAll(".index-uilities__box .index-uilities__right--items");
    var active = document.querySelector(".index-uilities__box .active");
    if (!contentList) {
      return;
    }
    var itemActive = active.getAttribute('data-active');
    contentLeft.forEach(function (itemLeft) {
      var itemLeftActive = itemLeft.getAttribute('data-active');
      var itemLeftEle = <HTMLElement>itemLeft;
      if (itemActive == itemLeftActive) {
        itemLeftEle.style.display = "block";
      }else{
        itemLeftEle.style.display = "none";
      }

    })

    contentList.forEach(function (item) {
      item.addEventListener('click', function () {
        var itemActive = item.getAttribute('data-active');

        contentLeft.forEach(function (itemLeft) {
          var itemLeftEle = <HTMLElement>itemLeft;
          itemLeftEle.style.display = "none";

        })

        contentLeft.forEach(function (itemLeft) {
          var itemLeftActive = itemLeft.getAttribute('data-active');
          var itemLeftEle = <HTMLElement>itemLeft;
          if (itemActive == itemLeftActive) {
            itemLeftEle.style.display = "block";
          }

        })
        contentList.forEach(function (e) {
          e.classList.remove("active");
        })

        // them active vao item da click
        item.classList.add("active");
      })
    })

  }

  var idx3 = document.querySelectorAll('.index3');
  idx3.forEach(function(idx){
    idx.classList.add('active');
  })
}
function index6(){
  if (document.getElementById('index6')) {
    new Swiper(".index-discover--swiper", {
      slidesPerView: 3,
      centeredSlides: true,
       spaceBetween: 0,
       centeredSlidesBounds: true,

      // slidesPerGroup: 3,
      loop: true,
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
      },
      on: {
        init: function () {
          var Active = document.querySelector('.swiper-slide-active .content__box');
          Active.classList.add('active');
        },
        transitionStart: function() {
          var Active_show = document.querySelectorAll('.content__box');
          Active_show.forEach(function(item){
            item.classList.remove('active');
          })
        },
        transitionEnd: function() {
          var Active_show = document.querySelector('.swiper-slide-active .content__box');
          Active_show.classList.add('active');
        }
      }
    });
  }
}

export default {
  index: function () {
    index1();
    index2();
    toggleIndex3();
    toggleIndex4();
    index6();
  }
}