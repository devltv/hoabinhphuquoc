declare var $ : any;

function toggleHamberger() {
  if (document.getElementById('header')) {
    var header = document.querySelector('.header');
    var ham = document.querySelector('.header-main__button');
    var nav = <HTMLElement>document.querySelector('.header-main__navMobile');
    // console.log(window.innerWidth);
    ham.addEventListener('click', function () {
      nav.style.maxHeight = `calc(100vh - ${header.clientHeight}px)`;
      if(window.innerWidth <= 640){
        nav.style.height = `calc(100vh - ${header.clientHeight}px)`;
      }
      else{
        nav.style.height = "";
      }
      var bodyHeight = <HTMLElement> document.querySelector('body');
      if (ham.classList.contains('show') && ham.classList.contains('active')) {
        ham.classList.remove('show');
        ham.classList.remove('active');

        nav.classList.remove('active');

        bodyHeight.classList.remove('enableSrcoll');
        
      }
      else {
        ham.classList.add('show');
        ham.classList.add('active');

        nav.classList.add('active');

        bodyHeight.classList.add('enableSrcoll');
        
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        
      }
    })
    
      
  }
}

// Kiểm tra xem sự kiện click trên document có click vào trong menu hay submenu or là icon không?
// Nếu không phải thì ta sẽ không cho hiển thị Menu nữa
function activeHamberger(evt: any) {
  var btnHam = document.querySelector('.header-main__button');
  var nav = document.querySelector('.header-main__navMobile');

  if (btnHam) {
    var evtTarget = evt.target;
    // Kiem tra co click vao btnHam ko? Neu co thi ko lam gi` ca
    do {
      if (evtTarget == nav) {
        return;
      }
      else if (evtTarget == btnHam) {
        return;
      }
      evtTarget = evtTarget.parentNode;
    } while (evtTarget);

    // Neu ko thi se remove class active
    
    btnHam.classList.remove('show');
    btnHam.classList.remove('active');
    nav.classList.remove('active');
  }
}


// Xử lý sự kiện active trên Header
function handleActiveHeader() {
  if (document.getElementById('header')) {
    document.addEventListener('click', function (e) {
      activeHamberger(e);
      activeLanguage(e);
      activeOrder(e);
      activeOptionOrder(e);
    })
    toggleHamberger();
    toggleLanguage();
    toggleOrder();
    listOptionOrder();  

    // resize window
    var btnHam = document.querySelector('.header-main__button');
    var nav = document.querySelector('.header-main__navMobile');

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1336) {

        // ẩn button hamberger và nav
        if (btnHam.classList.contains('show')) {
          btnHam.classList.remove('show');
          btnHam.classList.remove('active');
          nav.classList.remove('active');
        }
      }
    })
  }
}

function toggleLanguage() {
  if (document.getElementById('header')) {
    var language = document.querySelector('.content-info__language .language-active');
    var languageList = document.querySelector('.content-info__language .language-list');
    var languageActive = document.querySelector('.content-info__language .language-list .active');
    var languageItems = document.querySelectorAll('.content-info__language .language-list .language-list__item');

    var langValue = languageActive.getAttribute('data-lang');
    var content = language.getElementsByClassName('language-content');
    content[0].innerHTML = languageActive.innerHTML;
    content[0].setAttribute('data-lang', langValue);

    language.addEventListener('click', function () {
      if (language.classList.contains('active') || languageList.classList.contains('active')) {
        language.classList.remove('active');
        languageList.classList.remove('active');
      }
      else {
        language.classList.add('active');
        languageList.classList.add('active');
      }
    })

    languageItems.forEach(function (item, idx, list) {
      item.addEventListener('click', function (e) {
        list.forEach(function (tmp) {
          tmp.classList.remove('active');
        })
        var thisValue = this.getAttribute('data-lang');
        this.classList.add('active');

        content[0].innerHTML = this.innerHTML;
        content[0].setAttribute('data-lang', thisValue);

        language.classList.remove('active');
        languageList.classList.remove('active');

        var xhttp = new XMLHttpRequest();
        var loc = window.location.host;

        var hrefGet = `./_common-settings/ChangeCulture?culture=${thisValue}&url=${loc}`;

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            window.location.replace("/");
            return;
          }
          else {
            console.log('change language failed!' + thisValue);
          }
        };
        xhttp.open("GET", hrefGet, true);
        xhttp.send();
      })
    })
  }
}

// Kiểm tra xem sự kiện click trên document có click vào trong menu hay submenu or là icon không?
// Nếu không phải thì ta sẽ không cho hiển thị Menu nữa
function activeLanguage(evt: any) {
  var language = document.querySelector('.content-info__language .language-active');
  var languageList = document.querySelector('.content-info__language .language-list');

  if (language) {
    var evtTarget = evt.target;
    // Kiem tra co click vao btnHam ko? Neu co thi ko lam gi` ca
    do {
      if (evtTarget == languageList) {
        return;
      }
      else if (evtTarget == language) {
        return;
      }
      evtTarget = evtTarget.parentNode;
    } while (evtTarget);

    // Neu ko thi se remove class active
    language.classList.remove('active');
    languageList.classList.remove('active');
  }
}


function activeOrder(evt: any) {
  var link = document.querySelector('.header .content-order .content-order__link');
  var popup = document.querySelector('.header .content-order .content-order__popup');

  if (popup) {
    var evtTarget = evt.target;
    // Kiem tra co click vao btnHam ko? Neu co thi ko lam gi` ca
    do {
      if (evtTarget == popup) {
        return;
      }
      else if (evtTarget == link) {
        return;
      }
      evtTarget = evtTarget.parentNode;
    } while (evtTarget);

    // Neu ko thi se remove class active
    link.classList.remove('active');
    popup.classList.remove('active');
    var body = document.querySelector('body');
    body.style.overflow = "";
  }
}

function activeValueOpt(){
  let links = document.querySelectorAll('.content-order__popup.active .order-option-item');

  links.forEach(function(link){
    let item = link.getElementsByClassName('group-option-item');
    let optList = link.getElementsByClassName('group-option-list');
    let gpInput = link.getElementsByClassName('input-content__value');
    
    for (let i = 0; i < item.length; i++){
    
      if(item[i].classList.contains('active')){
        let val = item[i].getAttribute('data-value');
        let htmlItem = item[i].innerHTML;
  
        gpInput[0].innerHTML = htmlItem;
        gpInput[0].setAttribute('data-value', `${val}`);
      }
    }
    
    for (let i = 0; i < item.length; i++){
      let evtItem = item[i];

      evtItem.addEventListener('click', function(e){
        e.preventDefault();
        let val = this.getAttribute('data-value');
        let htmlItem = this.innerHTML;

        // add html vào đúng chỗ, và tắt option list
        gpInput[0].innerHTML = htmlItem;
        gpInput[0].setAttribute('data-value', `${val}`);
        optList[0].classList.remove('active');  

        // active item đó
        let tmpItems = link.getElementsByClassName('group-option-item');
        for(var num = 0; num < tmpItems.length; num++){
          tmpItems[num].classList.remove('active');
        }

        this.classList.add('active');
      })
    }
    
  })
}

function toggleOrder() {
  if (document.getElementById('header')) {
    var link = document.querySelector('.header .header-top__content .content-order__link');

    var popup = document.querySelector('.header .header-top__content .content-order__popup');
    var overlay = document.querySelector('.header .header-top__content .content-order__popup-overlay');
    var close = document.querySelector('.header .header-top__content .content-order__popup .close');
    var body = document.querySelector('body');
    link.addEventListener('click', function (e) {
      e.preventDefault();
      popup.classList.add('active');
      
      body.style.overflow = "hidden";
      activeValueOpt();
    })

    overlay.addEventListener('click', function (e) {
      e.preventDefault();
      
      popup.classList.remove('active');
      body.style.overflow = "";
    })

    close.addEventListener('click', function (e) {
      e.preventDefault();
      popup.classList.remove('active');
      body.style.overflow = "";
    })
  }
}

function activeOptionOrder(evt: any) {
  var links = document.querySelectorAll('.content-order__popup .order-option-item');
  links.forEach(function(item){
    var evtTarget = <HTMLElement> evt.target;
    var listOptions = item.getElementsByClassName('group-option-list');
    var content = item.getElementsByClassName('input-content');

    do {
      if (evtTarget === listOptions[0]) {
        return;
      }
      else if (evtTarget === content[0]){
        return;
      }

      evtTarget = <HTMLElement> evtTarget.parentNode;
    } while (evtTarget);

    listOptions[0].classList.remove('active');
  })
}

function listOptionOrder() {
  var listOptions = document.querySelectorAll('.header .content-order__popup .order-option-item');
  listOptions.forEach(function (opt) {

    var valOpt = opt.getElementsByClassName('input-content');
    var listOpt = opt.getElementsByClassName('group-option-list');

    for (var i = 0; i < valOpt.length; i++) {
      valOpt[i].addEventListener('click', function (e) {

        listOpt[0].classList.add('active');
      })
    }
  })
}


function dateTimePickerOrder(){
  $('#receiveOrder').datetimepicker({
    timepicker:false,
    format: 'd/m/Y',
  });
  $('#payOrder').datetimepicker({
    timepicker:false,
    format: 'd/m/Y',
  });
}

function changeInputError(inp : any){
  var infor = document.querySelector('#orderForm .infor-order');
  inp.addEventListener('focus', function(){
    this.classList.remove('error');
    infor.classList.remove('error');
    infor.classList.remove('success');
    infor.innerHTML = "";
  })
}

function checkInputValue(inp: any){
  if (inp){
    var tmpInp = <HTMLInputElement> inp;
    if (!tmpInp.value){
      tmpInp.classList.add('error');
      return false;
    }
    return true;
  }
  return false;
}

function checkOptionValue(opt:any){
  var valOpt = opt.getAttribute('data-value');
  if (valOpt){
    return true;
  }
  opt.classList.add('error');
  return false;
}

function checkAllValue(inps:any = null, opts :any = null){
  if (inps){
    var check = inps.find(function(inp:any){
      return !checkInputValue(inp);
    });
    if (check){
      return false;
    }
  }

  if (opts){
    var check = opts.find(function(opt:any){
      return !checkOptionValue(opt);
    });
    if (check){
      return false;
    }
  }

  return true;
}

function submit(method: string, action: string, content: string = null, dataOpt: any = null){
  var xhttp = new XMLHttpRequest();
  var info = document.querySelector('#orderForm .infor-order'); 
  
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log('submit form successed!');
      // info.innerHTML = this.responseText;
      return;
    }
    else {
      console.log('submit form failed!');
      console.log(dataOpt);
    }
  };

  if (content){     
    xhttp.open(`${method}`, `${action}`, true);
    xhttp.setRequestHeader("Content-Type", `${content}`);

    if(dataOpt){
      xhttp.send(JSON.stringify(dataOpt));
    }
    else{
      xhttp.send();
    }
  }
  else{
    xhttp.open(`${method}`, `${action}`, true);
    if(dataOpt){
      xhttp.send(JSON.stringify(dataOpt));
    }
    else{
      xhttp.send();
    }
  }
}

function submitOrder(){
  var idSm = document.getElementById('submitOrder');
  if (idSm){
    idSm.addEventListener('click', function(e){
      e.preventDefault();

      var receive = <HTMLInputElement> document.getElementById('receiveOrder');
      var pay = <HTMLInputElement> document.getElementById('payOrder');
      var optRoom = document.getElementById('optRoom');
      var optAdult = document.getElementById('optAdult');
      var optChild = document.getElementById('optChild');
      var sale = <HTMLInputElement> document.getElementById('saleId');

      changeInputError(receive);
      changeInputError(pay);
      
      if (!checkAllValue([receive, pay])){
        return false;
      }

      var dtOpt = {
        receive: receive.value,
        pay: pay.value,
        room: optRoom.getAttribute('data-value'),
        adult: optAdult.getAttribute('data-value'),
        child: optChild.getAttribute('data-value'),
        sale: sale.value
      }

      var form = document.getElementById('orderForm');
      var method = form.getAttribute('method');
      var action = form.getAttribute('action');
      var contentType = form.getAttribute('enctype');

      submit(method, action, contentType, dtOpt);

      //show client
      var popupHeader = document.querySelector('.content-order__popup');
      popupHeader.classList.remove('active');

      location.replace(`${action}`);
    })
  }
}

export const header = function () {
  handleActiveHeader();
  dateTimePickerOrder();
  submitOrder();
}