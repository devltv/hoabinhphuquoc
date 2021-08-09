declare var Swiper: any;
import pagination from "../layout/pagination";

function intro1() {
  if (document.getElementById('intro-1__wrapper')) {
    // new Swiper(".intro-1", {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    //   loop: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
  
    // });
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

    loadRestroom();
  }
}

function activeItemOption(){
  var options = document.querySelectorAll('.travel-popup--overlay.show .popup-wrapper__travel .travel-content__item');
  
  options.forEach(function(opt){
    var evtOpt = <HTMLElement> opt;
    evtOpt.onclick = function(e){
      e.preventDefault();
      evtOpt.classList.toggle('active');
    }
  })
}

function clickOptionJobHandle(){
  var items = document.querySelectorAll('#intro-5__wrapper .intro-5__section .job-popup .job-options__item');
  var contents = document.querySelectorAll('#intro-5__wrapper .intro-5__section .job-popup .job-content__item');

  items.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();
      items.forEach(function(tmpItem){
        tmpItem.classList.remove('active');
      })

      item.classList.add('active');

      var valBox = item.getAttribute('data-box');
      contents.forEach(function(tmpContent){
        tmpContent.classList.remove('active');
      })
    
      contents.forEach(function(content){
        var box = content.getAttribute('data-box');
        if (box === valBox){
          content.classList.add('active');
        }
      })
    })
  })
}

function activeItemJob(id: any){
  var items = document.querySelectorAll('#intro-5__wrapper .intro-5__section .job-popup .job-options__item');
  var contents = document.querySelectorAll('#intro-5__wrapper .intro-5__section .job-popup .job-content__item');
  
  items.forEach(function(tmpItem){
    tmpItem.classList.remove('active');
  })
  
  items.forEach(function(item){
    var box = item.getAttribute('data-box');
    if (box === id){
      item.classList.add('active');
    }
  })

  contents.forEach(function(tmpContent){
    tmpContent.classList.remove('active');
  })

  contents.forEach(function(content){
    var box = content.getAttribute('data-box');
    if (box === id){
      content.classList.add('active');
    }
  })
}

function closePopup(){
  var popup = document.querySelector('.travel-popup--overlay');

  var body = document.querySelector('body');
  var close = document.querySelector('#intro-4__wrapper .intro-4__section .travel-popup .popup-close');
    
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

function closePopupJob(){
  var popup = document.querySelector('.job-popup--overlay');

  var body = document.querySelector('body');
  var close = document.querySelector('#intro-5__wrapper .intro-5__section .job-popup .popup-close');
    
  // var inpRest = document.getElementById('checkUrl');
  // var closeData = "";
  // if (inpRest){
  //   closeData = inpRest.getAttribute('data-close');
  // }
  
  if (close){
    close.addEventListener('click', function(e : any){
      e.preventDefault();
      popup.classList.remove('show');
      body.style.overflow = "auto";

      // if (closeData){
      //   history.pushState({id: null}, 'default state', closeData);
      // }
    })
  }
}


function popupTravel(id: any = null){
  if (document.getElementById('intro-4__wrapper')){
    var itemLinkPopups = document.querySelectorAll('#intro-4__wrapper .intro-4__section .nav-custom .section .btn-link--more');
    var popup = document.querySelector('.travel-popup--overlay');
    var body = document.querySelector('body');
    var popupContent = document.querySelector('#intro-4__wrapper .travel-popup .popup .popup-wrapper--bg');
    
    var urlAjax = './popup-travel-intro';
    
    if (id){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.responseText){
            popupContent.innerHTML = this.responseText;
          }
          popup.classList.add('show');
          if (popup.classList.contains('show')){
            activeItemOption();
          }
          return;
        }
        else {
          popup.classList.add('show');
          if (popup.classList.contains('show')){
            activeItemOption();
          }

          console.log('popup failed!');
        }
      };
      xhttp.open("GET", `${urlAjax}/${id}`, true);
      xhttp.send();
    }
    else{
      popup.classList.remove('show');
      body.style.overflow = "auto";

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
                activeItemOption();
              }
  
              return;
            }
            else {
              body.style.overflow = "hidden";
              popup.classList.add('show');
              if (popup.classList.contains('show')){
                activeItemOption();
              }
  
              console.log('popup failed!');
            }
          };
          xhttp.open("GET", `${urlAjax}/${valueItem}`, true);
          xhttp.send();
        })
      })
    }
  }
}

function popupJob(id: any = null){
  if (document.getElementById('intro-5__wrapper')){
    var itemLinkPopups = document.querySelectorAll('#intro-5__wrapper .intro-5__section .job .job__content--more .btn-link--more');
    var popup = document.querySelector('.job-popup--overlay');
    var body = document.querySelector('body');
    // var popupContent = document.querySelector('#intro-5__wrapper .job-popup .popup .popup-wrapper--bg');
    
    // var urlAjax = './popup-job-intro';
    clickOptionJobHandle();

    // if (id){
    //   popup.classList.add('show');
    //   if (popup.classList.contains('show')){
    //     activeItemJob(id);
    //   }
    // }
    // else{
    popup.classList.remove('show');
    body.style.overflow = "auto";

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


        body.style.overflow = "hidden";
        popup.classList.add('show');
        if (popup.classList.contains('show')){
          activeItemJob(valueItem);
        }

        // history.pushState({id: valueItem}, urlItem, urlItem);
      })
    })
  }
  // }
}


function loadRestroom(){
  if(document.getElementById('intro-4__wrapper')){
    var inpRest = document.getElementById('checkUrl');

    window.addEventListener('popstate', function(e){
      if (e.state !== null){
        var url = location.pathname;
        window.location.replace(`${url}`)
      }
    })
    
    if (inpRest) {
      var val = inpRest.getAttribute('data-url');
      var id = inpRest.getAttribute('data-box');

      history.pushState({ id }, val, val);

      inpRest.setAttribute('data-box', `${id}`);
      inpRest.setAttribute('data-url', `${val}`);

      if (val && id) {
        popupTravel(id);
      }
    }

    closePopup();
    closePopupJob();
    popupTravel();
    popupJob();
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