declare var Swiper : any;

function forum2(){
  if (document.getElementById('forum-2')){
    var swiper = new Swiper(".forum-2 .active .zoom-imgs__right", {
      direction: "vertical",
      spaceBetween: 12,
      slidesPerView: 2.5,
      // lazy: true,

      on: {
        init: function () {
          var activeSlide = document.querySelector('.forum-2 .zoom-imgs__right .swiper-slide-active')
          // if (!activeSlide){
          //   activeSlide = document.querySelector('.forum-2 .zoom-imgs__right .swiper-slide-active')
          // }
          activeSlide.classList.add('active')
        },
        transitionStart: function() {
          var activeSlides = document.querySelectorAll('.forum-2 .zoom-imgs__right .swiper-slide')
          activeSlides.forEach(function(item){
            item.classList.remove('active')
          })
        },
        transitionEnd: function() {
          var activeSlide = document.querySelector('.forum-2 .zoom-imgs__right .swiper-slide-active')
          // if (!activeSlide){
          //   activeSlide = document.querySelector('.forum-2 .zoom-imgs__right .swiper-slide-active')
          // }
          activeSlide.classList.add('active')
        }
      }
    })

    var swiper2 = new Swiper(".forum-2 .active .zoom-imgs__left", {
      spaceBetween: 12,
      slidesPerView: 1,

      navigation: {
        nextEl: ".forum-2 .active .zoom-imgs__left .swiper-button-next",
        prevEl: ".forum-2 .active .zoom-imgs__left .swiper-button-prev",
      },

      // zoom: true,
      // lazy: true,

      thumbs: {
        swiper: swiper,
      },
    
      on: {
        init: function () {
          var activeSlide = document.querySelector('.forum-2 .zoom-imgs__right .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        },
        transitionStart: function() {
          var activeSlides = document.querySelectorAll('.forum-2 .zoom-imgs__right .swiper-slide')
          activeSlides.forEach(function(item){
            item.classList.remove('active')
          })

        },
        transitionEnd: function() {
          var activeSlide = document.querySelector('.forum-2 .zoom-imgs__right .swiper-slide-thumb-active')
          activeSlide.classList.add('active')
        }
      }
    });
    zoomImg('.forum-2 .active .zoom-imgs__left .swiper-slide');
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

function removeClass(list: any, rClass : string = "active"){
  list.forEach(function(item: any){
    item.classList.remove(rClass);
  });
}

function activeTitle(qStr: string, qChild: string, data: string = "data-title", callback : boolean = false){
  var listItem = document.querySelectorAll(qStr);
  var listChild = document.querySelectorAll(qChild);

  listItem.forEach(function(item){
    if (item.classList.contains('active')){
      var itemValue = item.getAttribute(data);

      listChild.forEach(function(child){
        if (child.getAttribute(data) == itemValue){
          child.classList.add('active');
        }
      })
    }
  })

  if (callback){
    callFunction();
  }

  listItem.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();
      removeClass(listItem, "active");

      this.classList.add('active');

      var thisValue = this.getAttribute(data);
      removeClass(listChild, "active");
      
      listChild.forEach(function(child){
        if (child.getAttribute(data) == thisValue){
          child.classList.add('active');
        }
      })

      if (callback){
        callFunction();
      }
    })
  })
}

function callFunction(){
  forum2();
  activeTitle(".forum-2 .zoom-content__title-item", ".forum-2 .zoom-content__desc-item", "data-title");
}

export const forum = function (){
  activeTitle(".forum-2 .forum-zoom-option__item", ".forum-2 .forum-zoom__wrapper .zoom", "data-title", true);
}