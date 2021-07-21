import pagination from "../layout/pagination" ;
function paginationUtil(){
    if(document.getElementById('library-1')){
        var options ={
            queryClassPagination: ".box-pagination",
            listBox:".box-list .box",
            itemsPages: 6,

        }
        pagination.pagination(options)
    }
}


export const library = function(){
    paginationUtil()
}