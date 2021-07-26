function toggleHamberger() {
  if (document.getElementById('header')) {
    var header = document.querySelector('.header');
    var ham = document.querySelector('.header-main__button');
    var nav = <HTMLElement>document.querySelector('.header-main__nav');

    ham.addEventListener('click', function () {
      nav.style.maxHeight = `calc(100vh - ${header.clientHeight}px)`;

      if (ham.classList.contains('show') && ham.classList.contains('active')) {
        ham.classList.remove('show');
        ham.classList.remove('active');

        nav.classList.remove('active');
      }
      else {
        ham.classList.add('show');
        ham.classList.add('active');

        nav.classList.add('active');
      }
    })
  }
}

// Kiểm tra xem sự kiện click trên document có click vào trong menu hay submenu or là icon không?
// Nếu không phải thì ta sẽ không cho hiển thị Menu nữa
function activeHamberger(evt: any) {
  var btnHam = document.querySelector('.header-main__button');
  var nav = document.querySelector('.header-main__nav');

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
    })
    toggleHamberger();
    toggleLanguage();

    // resize window
    var btnHam = document.querySelector('.header-main__button');
    var nav = document.querySelector('.header-main__nav');

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


export const header = function () {
  handleActiveHeader();
}