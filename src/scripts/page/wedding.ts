import pagination from '../layout/pagination';
declare var Swiper: any;
function swipperWedding2(){
  if (document.getElementById('wedding2')) {
    new Swiper(".wedding-banquetHall .active .content--swiper", {
      slidesPerView: 1,
      // spaceBetween: 18,
      // slidesPerGroup: 3,
      loop: true,
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
      }
    });
  }
}
function toggleWedding2() {
  if (document.getElementById('wedding2')) {
    var contentList = document.querySelectorAll(".wedding2 .content .content__items");
    console.log(contentList);
    var contentRight = document.querySelectorAll(".wedding2 .content .content__silde");
    var active = document.querySelector(".wedding2 .active");

    if (!contentList) {
      return;
    }

    var itemActive = active.getAttribute('data-active');
    contentRight.forEach(function (itemRight) {
      var itemRightActive = itemRight.getAttribute('data-active');
      if (itemActive == itemRightActive) {
        var itemRightEle = <HTMLElement>itemRight;
        itemRightEle.classList.add('active');
        itemRightEle.style.display = "block";
        swipperWedding2();

      } else {
        var itemRightEle = <HTMLElement>itemRight;
        itemRightEle.classList.remove('active');
        itemRightEle.style.display = "none";
      }

    })

    contentList.forEach(function (item) {
      item.addEventListener('click', function () {
        var itemActive = item.getAttribute('data-active');

        contentRight.forEach(function (itemRight) {
          var itemRightEle = <HTMLElement>itemRight;
          itemRightEle.style.display = "none";
          itemRightEle.classList.remove('active');
        })

        contentRight.forEach(function (itemRight) {

          var itemRightActive = itemRight.getAttribute('data-active');
          var itemRightEle = <HTMLElement>itemRight;
          if (itemActive == itemRightActive) {
            itemRightEle.style.display = "block";
            itemRightEle.classList.add('active');

            swipperWedding2();
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
function wedding4(){
    if (!document.getElementById('wedding4')){
      return;
    }
    var options = {
      queryClassPagination: '.wedding4 .wedding__setMenu .box-pagination',
      listBox: '.wedding4 .wedding__setMenu .wedding__card-column',
      itemPages: 6,
      scroll: {
              id: 'weddingListBox',
              header: '#header',
          },
    }
    pagination.pagination(options);
  }
export const wedding = function (){
    wedding4();
    toggleWedding2();
    }