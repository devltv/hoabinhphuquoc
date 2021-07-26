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
      nav_content.forEach(function (element){
            var items = element.getAttribute("data-active") 
            if(items === data_toggle){
             var activeitemcontent = introChange.querySelector(".intro-3__section--content .active")
             activeitemcontent.classList.remove("active")
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
          listBox:"#intro-3__wrapper #intro-1 .content-news",
          itemPages: 1,

      }
      pagination.pagination(options)

      var options ={
        queryClassPagination: "#intro-3__wrapper #intro-2 .box-pagination",
        listBox:"#intro-3__wrapper #intro-2 .content-news",
        itemPages: 1,

    }
    pagination.pagination(options)
  // }
}

export const intro = function(){
    intro1();
    intro2();
    changeContent()
    intropagintion()
  }