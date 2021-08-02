
import pagination from "../layout/pagination";

function getYtb() {
  var items = document.querySelectorAll('#library-1__wrapper .video__section .box-list__items');
  if (items) {
    items.forEach(function (item) {
      var srcImg = item.getAttribute('data-url');
      var altImg = item.getAttribute('data-alt');
      var play = item.getAttribute('data-play');

      if (altImg) {
        item.innerHTML = `<img class="lazyload" src="https://img.youtube.com/vi/${srcImg}/maxresdefault.jpg" alt="${altImg}" />`;
      }
      else {
        item.innerHTML = `<img class="lazyload" src="https://img.youtube.com/vi/${srcImg}/maxresdefault.jpg" alt="" />`;
      }

      if (play){
        item.innerHTML += `<img class="lazyload play" src="${play}" alt="play" />`;
      }
    })
  }
}


function libraryPagination() {
  // if(document.getElementById('library-1')){
  var options = {
    queryClassPagination: "#library-1__wrapper #library-1 .box-pagination",
    listBox: "#library-1__wrapper #library-1 .box-list__items--image",
    itemPages: 6,
  }
  pagination.pagination(options)

  var options = {
    queryClassPagination: "#library-1__wrapper #library-2 .box-pagination",
    listBox: "#library-1__wrapper #library-2 .box-list__items",
    itemPages: 6,

  }
  pagination.pagination(options)
  // }
}

export const library = function () {
  libraryPagination();
  getYtb();
}