declare var Swiper: any;

function index2() {
  if (document.getElementById('index2')) {
    new Swiper(".index-restroom--swiper", {
      slidesPerView: 1,
      spaceBetween: 8,
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


    if (!contentList) {
      return;
    }
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
export default {
  index: function () {
    index2();
    index3();
    toggleIndex3();
  }
}