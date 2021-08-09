declare var $ : any;

function dateTimePickerStep(){
  $('#receiveFormStep').datetimepicker({
    timepicker:false,
    format: 'd/m/Y',
  });
  $('#payFormStep').datetimepicker({
    timepicker:false,
    format: 'd/m/Y',
  });

  $('#dateToolbarStart').datetimepicker({
    timepicker:false,
    format: 'd/m/Y',
  });
  $('#dateToolbarEnd').datetimepicker({
    timepicker:false,
    format: 'd/m/Y',
  });
}

function opts(){
  var optItem = document.querySelectorAll('.select-product .option-item');
  optItem.forEach(function(item){
    var optHandle = item.getElementsByClassName('input-content');
    var listOpt = item.getElementsByClassName('group-option-list');
    var itemListOpt = listOpt[0].getElementsByClassName('group-option-item');
    var valContent = optHandle[0].getElementsByClassName('input-content__value');

    for (var i = 0; i < itemListOpt.length; ++i){
      if (itemListOpt[i].classList.contains('active')){
        valContent[0].innerHTML = itemListOpt[i].innerHTML;
        valContent[0].setAttribute('data-value', itemListOpt[i].getAttribute('data-value'));
        
        listOpt[0].classList.remove('active');
      }
    }

    optHandle[0].addEventListener('click', function(){
      listOpt[0].classList.toggle('active');
    })

    for (var i = 0; i < itemListOpt.length; ++i){
      itemListOpt[i].addEventListener('click', function(e){
        e.preventDefault();
        valContent[0].innerHTML = this.innerHTML;
        valContent[0].setAttribute('data-value', this.getAttribute('data-value'));

        for (var rm = 0; rm < itemListOpt.length; ++rm){
          itemListOpt[rm].classList.remove('active');
        }
        this.classList.add('active');
        listOpt[0].classList.remove('active');
      })
    }
  })

  // option select-product-info__item

  var optItemProduct = document.querySelectorAll('.select-product-info__item .option');
  optItemProduct.forEach(function(opt){
    var inp = opt.getElementsByClassName('input');
    var inpVal = inp[0].getElementsByClassName('input__value');

    var listOpt = opt.getElementsByClassName('group-option-list');
    var itemListOpt = listOpt[0].getElementsByClassName('group-option-item');

    inp[0].addEventListener('click', function(e){
      e.preventDefault();
      listOpt[0].classList.toggle('active');
    })

    for (var i = 0; i < itemListOpt.length; ++i){
      itemListOpt[i].addEventListener('click', function(e){
        e.preventDefault();
        inpVal[0].innerHTML = this.innerHTML;
        inpVal[0].setAttribute('data-value', this.getAttribute('data-value'));

        for (var rm = 0; rm < itemListOpt.length; ++rm){
          itemListOpt[rm].classList.remove('active');
        }
        this.classList.add('active');
        listOpt[0].classList.remove('active');
      })
    }
  })

  // click out
  document.addEventListener('click', function(e){
    optItem.forEach(function (item) {
      var evtTarget = <HTMLElement>e.target;
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

    optItemProduct.forEach(function(item){
      var evtTarget = <HTMLElement>e.target;
      var listOptions = item.getElementsByClassName('group-option-list');
      var content = item.getElementsByClassName('input');
  
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
  })
}



// function bookingStep(){
//   var idSubmit = document.getElementById('submitBookingStep');
//   var receive = <HTMLInputElement> document.getElementById('receiveFormStep');
//   var pay = <HTMLInputElement> document.getElementById('payFormStep');

//   // idSubmit.addEventListener('click', function(e){
//   //   e.preventDefault();
//   //   console.log(1);
//   // })
//   // idSubmit.addEventListener('click', function(e){
//   //   e.preventDefault();
//   //   console.log(2);
//   // })

//   // or 

//   idSubmit.onclick = function(e){
//     e.preventDefault();
    
//     console.log('re: ', receive.value);
//     console.log('pay: ', pay.value);

//     var selectOption = <HTMLInputElement> document.getElementById('cars');
//     console.log('opt: ', selectOption.value);


//     if (!pay.value || !receive.value){
//       console.log('empty error!!!');
//       var info = <HTMLElement> document.querySelector('#formStep .infor');
//       info.innerHTML = "Error!!!!";
//       info.classList.add('error');
//       info.style.color = "red";

//       return false;
//     }
//     var option = {
//       receive: receive.value,
//       pay: pay.value,
//       selectOption: selectOption.value,
//     }

//     // ajjax request
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         if (this.responseText){
//           var info = <HTMLElement> document.querySelector('#formStep .infor');
//           info.innerHTML = this.responseText; // html 
//         }
//       }
//       else {
//         console.log('popup failed!');
//       }
//     };

//     // checkbox -> gửi 

//     // var check = document.getElementsByName()

//     // parameters
//     // params
//     // web1.web4gsolutions.com/about-us/abc

//     // query
//     // web1.web4gsolutions.com/about-us?name=Khanh&old=21
//     // name -> khanh, old -> 21

//     // https://www.youtube.com/results?search_query=t%C3%ACm
//     // key = search_query

//     xhttp.open("GET", `./booking-get/`, true);
//     xhttp.send(JSON.stringify(option));

//     // or 

//     // submit thành công

//     return true;
//   }
// }

export const booking = function (){
  dateTimePickerStep();
  // bookingStep();

  opts();
}