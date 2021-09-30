declare var Swiper: any;
declare var $: any;

function index1() {
  if (document.getElementById('index1')) {
    new Swiper(`.index-intro  .content-intro--swiper`, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: true,
      deplay: 1500,
      pagination: {
        el: ".swiper-pagination",

      },
    });
  }
}

function index2() {
  if (document.getElementById('index2')) {
    new Swiper(".index-restroom .index-restroom--swiper", {
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
        nextEl: ".index-restroom .swiper-button-next",
        prevEl: ".index-restroom .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        541: {
          slidesPerView: 1.5,
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
        },
        1681: {
          spaceBetween: 18
        }
      }
    });

    // localStorage.setItem('box', '3');
    // localStorage.setItem('url', '/restroom/box-3');

    var moreLinks = document.querySelectorAll('#index2 .restroom-box .btn-link--more');
    moreLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var dtHr = link.getAttribute('data-href');
        var hr = link.getAttribute('href');
        localStorage.setItem('url', `${hr}`);

        var valueItem = "";
        var tmpItem = link;
        var count = 0;
        if (!tmpItem.getAttribute('data-box')) {
          do {
            tmpItem = tmpItem.parentElement;
            ++count;
          } while (!tmpItem.getAttribute('data-box') && count < 100);
        }

        valueItem = tmpItem.getAttribute('data-box')
        if (!valueItem) {
          console.log('Not found data-box!!');
          e.preventDefault();
          return false;
        }

        localStorage.setItem('box', `${valueItem}`);

        history.pushState({id: null}, hr, hr);

        location.replace(dtHr);
        return true;
      })
    })
  }
}
function swiperIndex3() {
  if (document.getElementById('index3')) {
    new Swiper(`.index-endow .active .endow--swiper`, {
      slidesPerView: 1,
      navigation: {
        nextEl: `.index-endow .active .swiper-button-next`,
        prevEl: `.index-endow .active .swiper-button-prev`,
      },
    });
  }
}
function toggleIndex3() {
  if (document.getElementById('index3')) {
    var contentList = document.querySelectorAll(".endow__content .endow__left--desc");
    var contentRight = document.querySelectorAll(".endow__content .endow__slide");
    var active = document.querySelector(".endow__content .active");

    if (!contentList) {
      return;
    }

    var itemActive = active.getAttribute('data-active');
    contentRight.forEach(function (itemRight) {
      var itemRightActive = itemRight.getAttribute('data-active');
      if (itemActive == itemRightActive) {
        var itemRightEle = <HTMLElement>itemRight;
        itemRightEle.classList.add('active');

        swiperIndex3();

      } else {
        var itemRightEle = <HTMLElement>itemRight;
        itemRightEle.classList.remove('active');
      }

    })

    contentList.forEach(function (item) {
      item.addEventListener('click', function () {
        var itemActive = item.getAttribute('data-active');

        contentRight.forEach(function (itemRight) {
          var itemRightEle = <HTMLElement>itemRight;
          // itemRightEle.style.display = "none";
          itemRightEle.classList.remove('active');
        })

        contentRight.forEach(function (itemRight) {

          var itemRightActive = itemRight.getAttribute('data-active');
          var itemRightEle = <HTMLElement>itemRight;
          if (itemActive == itemRightActive) {
            // itemRightEle.style.display = "block";
            itemRightEle.classList.add('active');

            swiperIndex3();
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

function linkIndex3() {
  var moreLinks = document.querySelectorAll('#index3 .endow__content .endow__right .endow__slide .btn-link--more');
  moreLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      // e.preventDefault();
      // var dtHr = link.getAttribute('data-href');
      // var hr = link.getAttribute('href');
      
      // var valueItem = "";
      // var tmpItem = link;
      // var count = 0;
      // if (!tmpItem.getAttribute('data-box')) {
      //   do {
      //     tmpItem = tmpItem.parentElement;
      //     ++count;
      //   } while (!tmpItem.getAttribute('data-box') && count < 100);
      // }

      // valueItem = tmpItem.getAttribute('data-box')
      // if (!valueItem) {
      //   console.log('Not found data-box!!');
      //   e.preventDefault();
      //   return false;
      // }

      // var tmpItemActive = link;
      // count = 0;
      // var valueItemActive = "";

      // if (!tmpItemActive.getAttribute('data-active')) {
      //   do {
      //     tmpItemActive = tmpItemActive.parentElement;
      //     ++count;
      //   } while (!tmpItemActive.getAttribute('data-active') && count < 100);
      // }

      // valueItemActive = tmpItemActive.getAttribute('data-active')
      // if (!valueItemActive) {
      //   console.log('Not found data-active!!');
      //   e.preventDefault();
      //   return false;
      // }

      // localStorage.setItem('url', `${hr}`);
      // localStorage.setItem('box', `${valueItem}`);
      // localStorage.setItem('active', `${valueItemActive}`);

      // history.pushState({id: null}, hr, hr);

      // location.replace(dtHr);
      return true;
    })
  })
}

function toggleIndex4() {
  if (document.getElementById('index4')) {
    var contentLeft = document.querySelectorAll(".index-uilities__box .index-uilities__boxleft ");
    var contentList = document.querySelectorAll(".index-uilities__box .index-uilities__right--items");
    var active = document.querySelector(".index-uilities__box .active");
    if (!contentList) {
      return;
    }
    var itemActive = active.getAttribute('data-active');
    var imgList = document.querySelectorAll('.index-uilities__wrapper .index-uilities__layout--img');

    contentLeft.forEach(function (itemLeft) {
      var itemLeftActive = itemLeft.getAttribute('data-active');
      var itemLeftEle = <HTMLElement>itemLeft;
      if (itemActive == itemLeftActive) {
        itemLeftEle.style.display = "block";
      } else {
        itemLeftEle.style.display = "none";
      }
    })

    imgList.forEach(function(imgItem){
      var activeImg = imgItem.getAttribute('data-layout');
      if (itemActive === activeImg){
        imgItem.classList.add('show');
      }
      else{
        imgItem.classList.remove('show');
      }
    })

    contentList.forEach(function (item) {
      item.addEventListener('click', function () {
        var itemActive = item.getAttribute('data-active');

        contentLeft.forEach(function (itemLeft) {
          var itemLeftEle = <HTMLElement>itemLeft;
          itemLeftEle.style.display = "none";

        })

        contentLeft.forEach(function (itemLeft) {
          var itemLeftActive = itemLeft.getAttribute('data-active');
          var itemLeftEle = <HTMLElement>itemLeft;
          if (itemActive == itemLeftActive) {
            itemLeftEle.style.display = "block";
          }
        })

        imgList.forEach(function(imgItem){
          var activeImg = imgItem.getAttribute('data-layout');
          if (itemActive === activeImg){
            imgItem.classList.add('show');
          }
          else{
            imgItem.classList.remove('show');
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

  var idx3 = document.querySelectorAll('.index3');
  idx3.forEach(function (idx) {
    idx.classList.add('active');
  })
}
function index6() {
  if (document.getElementById('index6')) {
    new Swiper(".index-discover--swiper", {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
      
      // slidesPerGroup: 3,
      loop: true,
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
          spaceBetween: 0,
        },
        541: {
          slidesPerView: 1.5,
          spaceBetween: 0,
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1281: {
          slidesPerView: 2.5,
          spaceBetween: 0,

        },
        1441: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1681: {
          slidesPerView: 3,
          spaceBetween: 0,
        }
      },
      on: {
        init: function () {
          var Active = document.querySelector('.swiper-slide-active .content__box');
          Active.classList.add('active');
        },
        transitionStart: function () {
          var Active_show = document.querySelectorAll('.content__box');
          Active_show.forEach(function (item) {
            item.classList.remove('active');
          })
        },
        transitionEnd: function () {
          var Active_show = document.querySelector('.swiper-slide-active .content__box');
          Active_show.classList.add('active');
        }
      }
    });
  }
}

function closeMapInfor() {
  const btn = document.querySelector("#index5 .map__wrapper--btnclose");
  if (btn) {
    btn.addEventListener('click', function(){
      const mapInfor = document.querySelector("#index5 .map__wrapper--infor");
      const btnRotate = btn.querySelector("svg");
      btnRotate.classList.toggle('active');
      mapInfor.classList.toggle('active');
    })
  }
}

function dateTimePickerOrder() {
  $('#receiveFooter').datetimepicker({
    timepicker: false,
    format: 'd/m/Y',
  });
  $('#payFooter').datetimepicker({
    timepicker: false,
    format: 'd/m/Y',
  });
}

function index7() {
  var formFooter = document.getElementById('form-footer')

  if (formFooter) {
    document.addEventListener('click', function (e) {
      activeOptionToggle(e);
    })
    activeOpt();
    dateTimePickerOrder();
    submitFormFooter();
  }
}


function activeOptionToggle(evt: any) {
  var links = document.querySelectorAll('.form-footer .option .option-item');

  links.forEach(function (item) {
    var evtTarget = <HTMLElement>evt.target;
    var listOptions = item.getElementsByClassName('group-option-list');
    var content = item.getElementsByClassName('input-content');

    do {
      if (evtTarget === listOptions[0]) {
        return;
      }
      else if (evtTarget === content[0]) {
        return;
      }

      evtTarget = <HTMLElement>evtTarget.parentNode;
    } while (evtTarget);

    listOptions[0].classList.remove('active');
  })
}

function activeOpt() {
  var opts = document.querySelectorAll('.form-footer .option .option-item');
  opts.forEach(function (opt) {
    var list = opt.getElementsByClassName('group-option-list');
    var optItems = opt.getElementsByClassName('group-option-item');
    var valueInput = opt.getElementsByClassName('input-content__value');

    opt.addEventListener('click', function () {
      list[0].classList.toggle('active');
    })

    for (let i = 0; i < optItems.length; ++i) {
      if (optItems[i].classList.contains('active')) {
        valueInput[0].setAttribute('data-value', optItems[i].getAttribute('data-value'));
        valueInput[0].innerHTML = optItems[i].innerHTML;
      }
    }

    for (let i = 0; i < optItems.length; ++i) {
      optItems[i].addEventListener('click', function () {
        // var val = this.getAttribute('data-value');
        // var htmlItem = this.innerHTML;

        valueInput[0].setAttribute('data-value', this.getAttribute('data-value'));
        valueInput[0].innerHTML = this.innerHTML;

        for (let tmp = 0; tmp < optItems.length; ++tmp) {
          optItems[tmp].classList.remove('active');
        }
        this.classList.add('active');
        // list[0].classList.remove('active');
      })
    }
  })
}

function checkInputValue(inp: any) {
  if (inp) {
    var tmpInp = <HTMLInputElement>inp;
    if (!tmpInp.value) {
      tmpInp.classList.add('error');
      return false;
    }
    return true;
  }
  return false;
}

function checkOptionValue(opt: any) {
  var valOpt = opt.getAttribute('data-value');
  if (valOpt) {
    return true;
  }
  opt.classList.add('error');
  return false;
}

function checkAllValue(inps: any = null, opts: any = null) {
  if (inps) {
    var check = inps.find(function (inp: any) {
      return !checkInputValue(inp);
    });
    if (check) {
      return false;
    }
  }

  if (opts) {
    var check = opts.find(function (opt: any) {
      return !checkOptionValue(opt);
    });
    if (check) {
      return false;
    }
  }

  return true;
}

function submit(method: string, action: string, content: string = null, dataOpt: any = null) {
  var info = document.querySelector('#orderFormFooter .infor-submit');

  var xhttp = new XMLHttpRequest();

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

  if (content) {
    xhttp.open(`${method}`, `${action}`, true);
    xhttp.setRequestHeader("Content-Type", `${content}`);

    if (dataOpt) {
      xhttp.send(JSON.stringify(dataOpt));
    }
    else {
      xhttp.send();
    }
  }
  else {
    xhttp.open(`${method}`, `${action}`, true);
    if (dataOpt) {
      xhttp.send(JSON.stringify(dataOpt));
    }
    else {
      xhttp.send();
    }
  }
}

function submitInfo() {
  var receive = <HTMLInputElement>document.getElementById('receiveFooter');
  var pay = <HTMLInputElement>document.getElementById('payFooter');

  var optRoom = document.getElementById('optRoomFooter');
  var optAdult = document.getElementById('optAdultFooter');
  var optChild = document.getElementById('optchildFooter');


  if (!checkAllValue([receive, pay])) {
    return false;
  }

  var dtOpt = {
    receive: receive.value,
    pay: pay.value,
    room: optRoom.getAttribute('data-value'),
    adult: optAdult.getAttribute('data-value'),
    child: optChild.getAttribute('data-value'),
  }

  var form = document.getElementById('orderFormFooter');
  if (form) {
    var method = form.getAttribute('method');
    var action = form.getAttribute('action');
    var contentType = form.getAttribute('enctype');

    submit(method, action, contentType, dtOpt);

    location.replace(`${action}`);
  }
}

function submitFormFooter() {
  var btn = document.getElementById('submitOrderFooter');

  if (btn) {
    btn.onclick = function (e) {
      e.preventDefault();
      submitInfo();
    }
  }
}

export default {
  index: function () {
    index1();
    index2();
    toggleIndex3();
    linkIndex3();
    toggleIndex4();
    index6();
    closeMapInfor();
    index7();
  }
}