
import pagination from "../layout/pagination";


function libraryPagination(){
  // if(document.getElementById('library-1')){
      var options ={
          queryClassPagination: "#library-1__wrapper #library-1 .box-pagination",
          listBox:"#library-1__wrapper #library-1 .box-list__items",
          itemPages: 1,

      }
      pagination.pagination(options)

      var options ={
        queryClassPagination: "#library-1__wrapper #library-2 .box-pagination",
        listBox:"#library-1__wrapper #library-2 .box-list__items",
        itemPages: 1,

    }
    pagination.pagination(options)
  // }
}

export const library = function(){
    libraryPagination()
  }