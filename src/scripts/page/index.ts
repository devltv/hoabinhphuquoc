declare var Swiper: any;

function index2() {
  if (document.getElementById('index2')) {
    new Swiper(".index-restroom--swiper", {
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
  }
}
function index3() {
  if (document.getElementById('index3')) {
    new Swiper(".index-endow--swiper", {
      slidesPerView: 1,
      // spaceBetween: 8,
      // slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
      }
    });
  }
}
function toggleIndex3() {
  if (document.getElementById('index3')) {
    var contentList = document.querySelectorAll(".index-endow__content .index-endow__left--desc");
    var contentRight = document.querySelectorAll(".index-endow__content .index-endow__slide");
    var active = document.querySelector(".index-endow__content .active");
    console.log(active);
    if (!contentList) {
      return;
    }

    var itemActive = active.getAttribute('data-active');
    contentRight.forEach(function (itemRight) {
      var itemRightActive = itemRight.getAttribute('data-active');
      if (itemActive == itemRightActive) {
        var itemRightEle = <HTMLElement>itemRight;
        itemRightEle.style.display = "block";
      } else {
        var itemRightEle = <HTMLElement>itemRight;
        itemRightEle.style.display = "none";
      }

    })
    console.log(itemActive);

    contentList.forEach(function (item) {
      item.addEventListener('click', function () {
        // console.log(item.getAttribute('data-active'));
        var itemActive = item.getAttribute('data-active');

        contentRight.forEach(function (itemRight) {
          var itemRightEle = <HTMLElement>itemRight;
          itemRightEle.style.display = "none";

        })

        contentRight.forEach(function (itemRight) {

          var itemRightActive = itemRight.getAttribute('data-active');
          var itemRightEle = <HTMLElement>itemRight;
          if (itemActive == itemRightActive) {
            console.log(itemRightActive);
            console.log(itemActive);
            itemRightEle.style.display = "block";
          }
        })


        contentList.forEach(function (e) {
          e.classList.remove("active");
        })

        // them active vao item da click
        item.classList.add("active");
      })
    })
    // contentList.forEach(item => item.addEventListener('click', ()=>{
    //   // xoa active
    //   if(item.classList.contains('active')){
    //     item.classList.remove('active');
    //   }
    //   else{
    //     contentList.forEach(function(e){
    //       e.classList.remove("active");
    //     })

    //     // them active vao item da click
    //     item.classList.add("active");
    //   }
    // }))

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
}
function index6(){
  if (document.getElementById('index6')) {
    new Swiper(".index-discover--swiper", {
      slidesPerView: 3,
      centeredSlides: true,
       spaceBetween: 0,
      // slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
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
    index2();
    index3();
    toggleIndex3();
    toggleIndex4();
    index6();
  }
}