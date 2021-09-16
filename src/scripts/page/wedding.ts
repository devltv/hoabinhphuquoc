import pagination from '../layout/pagination';
declare var Swiper: any;
function swipperWedding2() {
  if (document.getElementById('wedding2')) {

    new Swiper(".wedding-banquetHall .content__silde.active .content--swiper", {
      slidesPerView: 1,
      // spaceBetween: 18,
      slidesPerGroup: 1,
      // loopFillGroupWithBlank: true,
      pagination: {
        el: ".wedding-banquetHall .content__silde.active .swiper-pagination",
        clickable: true,
      },

    });
  }
}
function toggleWedding2() {
  if (document.getElementById('wedding2')) {
    var contentList = document.querySelectorAll(".wedding2 .content .content__items");

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
function wedding4() {
  if (!document.getElementById('wedding4')) {
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


function closePopup(){
  var popup = document.querySelector('.wedding-popup--overlay');

  var body = document.querySelector('body');
  var close = document.querySelector('#wedding5 .wedding5 .wedding-popup .popup-close');
    
  if (close){
    close.addEventListener('click', function(e : any){
      e.preventDefault();
      popup.classList.remove('show');
      body.style.overflow = "auto";

    })
  }
}


function popupWedding(id: any = null){
  if (document.getElementById('wedding5')){
    var itemLinkPopups = document.querySelectorAll('#wedding5 .wedding5 .wedding-service .content-bottom__more .btn--more');
    var popup = document.querySelector('.wedding-popup--overlay');
    var body = document.querySelector('body');

    popup.classList.remove('show');
    body.style.overflow = "auto";

    itemLinkPopups.forEach(function(item){
      item.addEventListener('click', function(e){
        e.preventDefault();
        
        body.style.overflow = "hidden";
        popup.classList.add('show');

      })
    })
  }
}


function closePopupHall(){
  var popup = document.querySelector('.hall-popup--overlay');

  var body = document.querySelector('body');
  var close = document.querySelector('#wedding2 .wedding2 .hall-popup .popup-close');
    
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

function popupHall(id: any = null){
  if (document.getElementById('wedding2')){
    var itemLinkPopups = document.querySelectorAll('#wedding2 .wedding2 .content .content__left .content__items');
    var popup = document.querySelector('.hall-popup--overlay');
    var body = document.querySelector('body');
    var popupContent = document.querySelector('#wedding2 .hall-popup .popup .popup-wrapper--bg');
    
    var urlAjax = '/popup-hall-wedding';
    
    // if (id){
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //       if (this.responseText){
    //         popupContent.innerHTML = this.responseText;
    //       }
    //       popup.classList.add('show');

    //       return;
    //     }
    //     else {
    //       popup.classList.add('show');

    //       console.log('popup failed!');
    //     }
    //   };
    //   xhttp.open("GET", `${urlAjax}/${id}`, true);
    //   xhttp.send();
    // }
    // else{
    //   popup.classList.remove('show');
    //   body.style.overflow = "auto";

      itemLinkPopups.forEach(function(item){
        console.log(1)
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
  
              return;
            }
            else {
              body.style.overflow = "hidden";
              popup.classList.add('show');
  
              console.log('popup failed!');
            }
          };
          xhttp.open("GET", `${urlAjax}/${valueItem}`, true);
          xhttp.send();
        })
      })
    // }
  }
}


function loadHallWedding(){
  if(document.getElementById('wedding2')){
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
        popupHall(id);
      }
    }

    closePopupHall();
    popupHall();
  }
}

function loadWedding(){
  if(document.getElementById('wedding5')){
    closePopup();
    popupWedding();
  }
}

export const wedding = function () {
  wedding4();
  toggleWedding2();

  loadWedding();

  loadHallWedding();
}