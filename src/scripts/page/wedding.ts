import pagination from '../layout/pagination';
function wedding4(){
    if (!document.getElementById('wedding4')){
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
export const wedding = function (){
    wedding4();
  }