import pagination from '../layout/pagination';

function endow1(){
  // var slideActive = document.querySelectorAll('.endow-1 .endow__right .active .endow-box');
  var options = {
    queryClassPagination: '.endow-1 .endow__right .active .box-pagination',
    listBox: '.endow-1 .endow__right .active .endow-box',
    itemPages: 1,

  }

  pagination.pagination(options);
}

export default {
  endow: function () {
    endow1();
  }
}