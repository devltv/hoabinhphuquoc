function scrollToTop(strId:string, queryHeader: string = ""){
  if (document.querySelector(strId)){
    // lấy div có id string
    var featuredItem = <HTMLElement>document.querySelector(strId);
    // khai báo top = 0 mặc định đầu tiên
    var topFeatured = 0;

    // tính top đó trong html có vị trí bao nhiêu
    if (featuredItem){
      var parentFeatured = <HTMLElement> featuredItem.offsetParent;
      var count = 0;
      while(parentFeatured.nodeName !== "BODY" && count < 100){
        topFeatured += parentFeatured.offsetTop;
        parentFeatured = <HTMLElement> parentFeatured.offsetParent;
        count++;
      }
      topFeatured += featuredItem.offsetTop;
    }
    
    // Trừ đi thanh Header
    var hHeader = document.querySelector(queryHeader);
    if (hHeader){
      topFeatured -= hHeader.clientHeight;
    }

    window.scrollTo({
      top: topFeatured,
      left: 0,
      behavior: "smooth"
    });
  }
}

function scroll(){
  var link = document.querySelectorAll('.cuisine-kitchen .content__items a');
  if (link){
    link.forEach(function(item){

      item.addEventListener('click', function(e){
        e.preventDefault();

        var idScroll = this.getAttribute('href');

        scrollToTop(`${idScroll}`, '#header');
      })
    })
  }
}

function closePopup(){
  var popup = document.querySelector('.cuisine-popup--overlay');
  var body = document.querySelector('body');
  var close = document.querySelector('#cuisine2 .cuisine-popup .popup-close')
    
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
  if (document.getElementById('cuisine2')){
    var itemLinkPopups = document.querySelectorAll('#cuisine2 .cuisine-wrapper .content__more .btn-link--more');
    
    var popup = document.querySelector('.cuisine-popup--overlay');
    var body = document.querySelector('body');
    var popupContent = document.querySelector('#cuisine2 .cuisine-popup .popup .popup-wrapper--bg');
    
    var urlAjax = './popup-cuisine';

    if(localStorage.getItem('box') && localStorage.getItem('url')){
      var boxLocal = localStorage.getItem('box');
      var urlLocal = localStorage.getItem('url');
     
      history.pushState({id: boxLocal}, urlLocal, urlLocal);

      localStorage.setItem('box', '');
      localStorage.setItem('url', '');
      
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.responseText){
            popupContent.innerHTML = this.responseText;
          }
          popup.classList.add('show');
          // if (popup.classList.contains('show')){
          //   swiperRest();
          // }

          closePopup();
          return;
        }
        else {
          popup.classList.add('show');
          // if (popup.classList.contains('show')){
          //   swiperRest();
          // }
          console.log('popup failed!');
        }
      };
      xhttp.open("GET", `${urlAjax}/${localStorage.getItem('box')}`, true);
      xhttp.send();
    }
    else if (id){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.responseText){
            popupContent.innerHTML = this.responseText;
          }
          popup.classList.add('show');
          // if (popup.classList.contains('show')){
          //   swiperRest();
          // }

          closePopup();
          return;
        }
        else {
          popup.classList.add('show');
          // if (popup.classList.contains('show')){
          //   swiperRest();
          // }

          console.log('popup failed!');
        }
      };
      xhttp.open("GET", `${urlAjax}/${id}`, true);
      xhttp.send();
    }
    else{
      popup.classList.remove('show');
      body.style.overflow = "auto";
    }

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
  if(document.getElementById('cuisine2')){
    var inpRest = document.getElementById('checkUrl');

    if (!inpRest){
      popupRest();
      return;
    }

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

    history.pushState({id: null}, 'default state', close);
    
    if (inpRest){
      if (id && val && val){
        history.pushState({id}, val, val);
        inpRest.setAttribute('data-box', "");
        inpRest.setAttribute('data-url', "");
      }
      selectedBox(id);
    }
  }
}

function selectedBox(id: any){
  popupRest(id);
}

export const cuisine = function(){
  scroll();
  loadRestroom();
}