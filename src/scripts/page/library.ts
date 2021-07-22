import pagination from "../layout/pagination";

function library1(){
    // if(document.getElementById('library-1')){
        var options ={
            queryClassPagination: "#library-1__wrapper #library-1 .box-pagination",
            listBox:"#library-1__wrapper #library-1 .box-list__items",
            itemPages: 1,

        }
        pagination.pagination(options)
    // }
}
function library2(){
    // if(document.getElementById('library-1')){
        var options ={
            queryClassPagination: "#library-1__wrapper #library-2 .box-pagination",
            listBox:"#library-1__wrapper #library-2 .box-list__items",
            itemPages: 1,

        }
        pagination.pagination(options)
    // }
}

export default {
    library: function () {
        library1();
        library2();
    }
  }