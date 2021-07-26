// function toggleLang(){
//   var language = document.querySelector('.content-info__language .language-active');
//   console.log(language);
//   if (language){
//     var listLang = document.querySelector('.language-list');
//     var languages = document.querySelectorAll('.language-list .language-list__item');
//     var langActive = document.querySelector('.language-list .active');

//     var content = language.getElementsByClassName('language-content');
//     var thisValue = langActive.getAttribute('data-lang');
//     content[0].innerHTML = langActive.innerHTML;
//     content[0].setAttribute('data-lang', thisValue);

//     language.addEventListener('click', function(){
//       if (listLang.classList.contains('active') || language.classList.contains('active')){
//         listLang.classList.remove('active');
//         language.classList.remove('active');
//       }
//       else{
//         listLang.classList.add('active');
//         language.classList.add('active');
//       }
//     })

//     languages.forEach(function(item){
//       item.addEventListener('click', function(e){
//         e.preventDefault();
//         languages.forEach(function(tmp){
//           tmp.classList.remove('active');
//         })
//         this.classList.add('active');
//         var content = language.getElementsByClassName('language-content');
//         content[0].innerHTML = this.innerHTML;

//         if (listLang.classList.contains('active')){
//           listLang.classList.remove('active');
//         }

//         var thisValue = this.getAttribute('data-lang');
//         content[0].setAttribute('data-lang', thisValue);

//         // ajax language
//         var xhttp = new XMLHttpRequest();
//         var loc = window.location.host;

//         var hrefGet = `./_common-settings/ChangeCulture?culture=${thisValue}&url=${loc}`;
        
//         xhttp.onreadystatechange = function () {
//           if (this.readyState == 4 && this.status == 200) {
//             window.location.replace("/");
//             return;
//           }
//           else {
//             console.log('change language failed! - ' + thisValue);
//           }
//         };
//         xhttp.open("GET", hrefGet, true);
//         xhttp.send();
//       })
//     })
//   }
// }

// // Kiểm tra xem sự kiện click trên document có click vào trong menu hay submenu or là icon không?
// // Nếu không phải thì ta sẽ không cho hiển thị Menu nữa
// function activeLanguage(evt: any) {
// 	var btnLang = document.querySelector('.content-info__language .language-active');
//   var list = document.querySelector('.language-list');

// 	if (btnLang) {
// 		var evtTarget = evt.target;
// 		// Kiem tra co click vao btnLang ko? Neu co thi ko lam gi` ca
// 		do {
//       if (evtTarget == list){
//         return;
//       }
// 			else if (evtTarget == btnLang) {
//         return;
// 			}
// 			evtTarget = evtTarget.parentNode;
// 		} while (evtTarget);

// 		// Neu ko thi se remove class active
    
//     list.classList.remove('active');
//     btnLang.classList.remove('active');
// 	}
// }


// // Xử lý sự kiện active trên Header
// function handleActiveLanguage(){
//   if (document.getElementById('header')){
//     document.addEventListener('click', function(e){
//       activeLanguage(e);
//     })
//     toggleLang();
//   }
// }

// export const language = function(){
//   handleActiveLanguage();
// }