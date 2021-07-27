import pagination from '../layout/pagination';



function rest1(){
  if (!document.getElementById('restroom-1')){
    return;
  }
  // var slideActive = document.querySelectorAll('.endow-1 .endow__right .active .endow-box');
  var options = {
    queryClassPagination: '.restroom-1 .restroom .box-pagination',
    listBox: '.restroom-1 .restroom .restroom-box__item',
    itemPages: 6,
    scroll: {
			id: 'restroomListBox',
			header: '#header',
		},
  }
  pagination.pagination(options);
}

export const restroom = function (){
  rest1();
}