declare var Swiper: any;

function closePopup(){
  var popup = document.querySelector('.service-popup--overlay');
  var body = document.querySelector('body');
  var close = document.querySelector('#service-1 .service-popup .popup-close')
    
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
  if (document.getElementById('service-1')){
    var itemLinkPopups = document.querySelectorAll('#service-1 .tour-content .box-item .box-item-content__more-link');
    var popup = document.querySelector('.service-popup--overlay');
    var body = document.querySelector('body');
    var popupContent = document.querySelector('#service-1 .service-popup .popup');
    
    var urlAjax = '/popup-service';

    // if(localStorage.getItem('box') && localStorage.getItem('url')){
    //   var boxLocal = localStorage.getItem('box');
    //   var urlLocal = localStorage.getItem('url');
     
    //   history.pushState({id: boxLocal}, urlLocal, urlLocal);

    //   localStorage.setItem('box', '');
    //   localStorage.setItem('url', '');
      
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //       if (this.responseText){
    //         popupContent.innerHTML = this.responseText;
    //       }
    //       popup.classList.add('show');
    //       // if (popup.classList.contains('show')){
    //       //   swiperRest();
    //       // }

    //       closePopup();
    //       return;
    //     }
    //     else {
    //       popup.classList.add('show');
    //       // if (popup.classList.contains('show')){
    //       //   swiperRest();
    //       // }
    //       console.log('popup failed!');
    //     }
    //   };
    //   xhttp.open("GET", `${urlAjax}/${localStorage.getItem('box')}`, true);
    //   xhttp.send();
    // }
    // else if (id){
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //       if (this.responseText){
    //         popupContent.innerHTML = this.responseText;
    //       }
    //       popup.classList.add('show');
    //       // if (popup.classList.contains('show')){
    //       //   swiperRest();
    //       // }

    //       closePopup();
    //       return;
    //     }
    //     else {
    //       popup.classList.add('show');
    //       // if (popup.classList.contains('show')){
    //       //   swiperRest();
    //       // }

    //       console.log('popup failed!');
    //     }
    //   };
    //   xhttp.open("GET", `${urlAjax}/${id}`, true);
    //   xhttp.send();
    // }
    // else{
    //   popup.classList.remove('show');
    //   body.style.overflow = "auto";
    // }

    closePopup();
    
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
            // if (popup.classList.contains('show')){
            //   swiperRest();
            // }

            closePopup();

            return;
          }
          else {
            body.style.overflow = "hidden";
            popup.classList.add('show');
            // if (popup.classList.contains('show')){
            //   swiperRest();
            // }

            console.log('popup failed!');
          }
        };
        xhttp.open("GET", `${urlAjax}/${valueItem}`, true);
        xhttp.send();
      })
    })
  }
}



function loadRestroom(){
  if(document.getElementById('service-1')){
    var inpRest = document.getElementById('checkUrl');
    
    window.addEventListener('popstate', function(e){
      if (e.state !== null){
        var url = location.pathname;
        window.location.replace(`${url}`)
      }
    })
    
    // window.addEventListener('popstate', function(e){
    //   if (e.state !== null){
    //     selectedBox(e.state.id);
    //   }
    // })
    
    var close = inpRest.getAttribute('data-close');
    var val = inpRest.getAttribute('data-url');
    var id = inpRest.getAttribute('data-box');

    // history.pushState({id: null}, 'default state', close);
    
    if (inpRest){
      if (id && val && val){
        history.pushState({id}, val, val);
        inpRest.setAttribute('data-box', "");
        inpRest.setAttribute('data-url', "");
      }
      selectedBox(id);
    }

    popupRest();

  }
}

function selectedBox(id: any){
  popupRest(id);
}

function service4() {
  if (document.getElementById('service-4')) {
    new Swiper(".imgs-swiper", {
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
          slidesPerView: 1.25,
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
          spaceBetween: 18
        },
        1681: {
          slidesPerView: 3,
          spaceBetween: 18
        }
      }
    });
  }
}

export const service = function(){
  loadRestroom();
  service4();
}