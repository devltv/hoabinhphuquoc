declare var Swiper: any;
import pagination from "../layout/pagination";

function intro1() {
  if (document.getElementById('intro-1__wrapper')) {
    new Swiper(".intro-1", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
    });
  }
}

function intro2() {
  if (document.getElementById('intro-2__wrapper')) {
    new Swiper(".intro-2", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 1200,
      autoplay: {
        delay: 2500,
       
      },
    });
  }
}

function intro4() {
  if (document.getElementById('intro-4__wrapper')) {
    new Swiper(".intro-4", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      initialSlide: 1,
      
    });
  }
}


function intro5() {
  if (document.getElementById('intro-5__wrapper')) {
    new Swiper(".intro-5", {
      slidesPerView: 2,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      speed: 1200,
      // autoplay: {
      //   delay: 2500,
       
      // },
      breakpoints: {
        641: {
          slidesPerView: 3,
        },
        1025: {
          slidesPerView: 4,
        },
      },
    });
  }
}
function changeContent(){
  var introChange = document.querySelector("#intro-3__wrapper")
  if(introChange){
    var nav_items = introChange.querySelectorAll(".intro-3__section--nav .intro-3__section--nav-items")
    var nav_content = introChange.querySelectorAll(".intro-3__section--content .intro-3__section--content-items")
    
    nav_items.forEach(element => element.addEventListener('click',()=>{

      var activeitem = introChange.querySelector(".intro-3__section--nav .active")
      activeitem.classList.remove("active")
      element.classList.add("active")
      var data_toggle = element.getAttribute("data-active")
      console.log(data_toggle)
      var activeitemcontent = introChange.querySelector(".intro-3__section--content .intro-3__section--content-items.active")
      activeitemcontent.classList.remove("active")
      nav_content.forEach(function (element){
            var items = element.getAttribute("data-active") 
            
            if(items === data_toggle){
             
             element.classList.add("active")
            }
         })
    }))
  
  }
}

function intropagintion(){
  // if(document.getElementById('library-1')){
      var options ={
          queryClassPagination: "#intro-3__wrapper #intro-1 .box-pagination",
          listBox:"#intro-3__wrapper #intro-1 .content-news__items",
          itemPages: 6,

      }
      pagination.pagination(options)

      var options ={
        queryClassPagination: "#intro-3__wrapper #intro-2 .box-pagination",
        listBox:"#intro-3__wrapper #intro-2 .content-news__items",
        itemPages: 6,

    }
    pagination.pagination(options)
  // }
}

export const intro = function(){
    intro1();
    intro2();
    intro4();
    intro5();
    changeContent();
    intropagintion();
  }