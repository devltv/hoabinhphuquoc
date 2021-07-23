function toggleHamberger(){
  if (document.getElementById('header')){
    var header = document.querySelector('.header');
    var ham = document.querySelector('.header-main__button');
    var nav = <HTMLElement> document.querySelector('.header-main__nav');

    ham.addEventListener('click', function(){
      nav.style.maxHeight = `calc(100vh - ${header.clientHeight}px)`;

      if (ham.classList.contains('show') && ham.classList.contains('active')){
        ham.classList.remove('show');
        ham.classList.remove('active');

        nav.classList.remove('active');
      }
      else{
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
      if (evtTarget == nav){
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
function handleActiveHeader(){
  if (document.getElementById('header')){
    document.addEventListener('click', function(e){
      activeHamberger(e);
    })
    toggleHamberger();

    // resize window
    var btnHam = document.querySelector('.header-main__button');
    var nav = document.querySelector('.header-main__nav');

    window.addEventListener('resize', function(){
      if (window.innerWidth > 1336){

        // ẩn button hamberger và nav
        if (btnHam.classList.contains('show')){
          btnHam.classList.remove('show');
          btnHam.classList.remove('active');
          nav.classList.remove('active');
        }
      }
    })
  }
}

export const header = function(){
  handleActiveHeader();
}