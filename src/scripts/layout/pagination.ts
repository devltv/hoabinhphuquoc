
// Khởi tạo pagination với class ul.pagination, với box list
function pagination (options: any) {
  // queryPagination: string, queryBox: string

  var pages = <HTMLElement>document.querySelector(`${options.queryClassPagination}`);
  var totalBox = document.querySelectorAll(options.listBox);
  var totalPage = Math.ceil(totalBox.length / options.itemPages);
  if (!pages || !totalBox){
    return;
  }

  var scrollTop = "";
  if (options.scroolToId){
    scrollTop = options.scroolToId;
  }

  paginationCreate(pages, totalBox, 1, totalPage, options.itemPages, scrollTop);
  activeBox(totalBox, 1, options.itemPages);
}

function activeBox(totalBox:any, liActive: number, itemPages:number){
  totalBox.forEach(function(item: HTMLElement){
    item.style.display = "";
  })

  totalBox.forEach(function(item: HTMLElement, index: number){
    var itemPage = Math.ceil((index + 1) / itemPages);
    if (itemPage !== liActive){
      item.style.display = "none";
    }
  })
}

function paginationCreate(objClass:any, totalBox:any, liActive:number, totalPage: number, itemPages: number, scrollTop:string = ""){
  // Math.ceil(totalBox.length / 5)

  objClass.innerHTML = createPagination(totalPage, liActive);

  // thay đổi kí tự next và prev
  changeIcon(objClass, "next", `<svg xmlns="http://www.w3.org/2000/svg" width="26.65" height="17.567" viewBox="0 0 26.65 17.567"  style="transform:rotate(90deg)"><path id="Path_5" data-name="Path 5" d="M1760,5251.718l9.082-9.082,9.082,9.082" transform="translate(-1755.757 -5238.393)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="6"/></svg>`);
  changeIcon(objClass, "prev", `<svg xmlns="http://www.w3.org/2000/svg" width="26.65" height="17.567" viewBox="0 0 26.65 17.567" style="transform:rotate(270deg)"><path id="Path_5" data-name="Path 5" d="M1760,5251.718l9.082-9.082,9.082,9.082" transform="translate(-1755.757 -5238.393)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="6"/></svg>`);

  // click button
  clickButton(objClass, totalBox, totalPage, itemPages, scrollTop);
}

function hiddenNextPrev(objClass:any, itemActive: number, totalPage:number){
  let liBtns = objClass.getElementsByTagName('li');

  let itemNext;
  let itemPrev;

  // lấy giá trị được active
  for (let i = 0; i < liBtns.length; i++){
    let item = <HTMLElement>liBtns[i];
    if (item.classList.contains('next')){
      itemNext = item;
    }
    else if (item.classList.contains('prev')){
      itemPrev = item;
    }
  }

  // Không cho click vào button Next or Prev nếu active gần nó
  if (totalPage === 1){
    itemPrev.classList.add('btn-hidden');
    itemPrev.classList.remove('btn-hidden');
  }
  else if (itemActive === 1){
    itemPrev.classList.add('btn-hidden');
    itemNext.classList.remove('btn-hidden');
  }
  else if (itemActive === totalPage){
    itemPrev.classList.remove('btn-hidden');
    itemNext.classList.add('btn-hidden');
  }
  else{
    itemPrev.classList.remove('btn-hidden');
    itemNext.classList.remove('btn-hidden');
  }
}

function clickButton(objClass:any, totalBox:any, totalPage: number, itemPages:number, scrollTop:string = ""){
  let liBtns = objClass.getElementsByTagName('li');

  let itemActive: number;

  // lấy giá trị được active
  for (let i = 0; i < liBtns.length; i++){
    let item = <HTMLElement>liBtns[i];
    if (item.classList.contains('active')){
      itemActive = parseInt(item.getAttribute('data-number'));
    }
  }

  // Không cho click vào button Next or Prev nếu active gần nó
  hiddenNextPrev(objClass, itemActive, totalPage);

  for (let i = 0; i < liBtns.length; i++){
    let item = liBtns[i];
    
    item.onclick = function(){
      // let classItem = this.getAttribute('class');
      let dataItem = parseInt(this.getAttribute('data-number'));
      
      if (this.classList.contains('btn-hidden') || dataItem == itemActive){
        return;
      }
      if (this.classList.contains('next') && itemActive < totalPage){
        itemActive = itemActive + 1;
      }
      else if (this.classList.contains('prev') && itemActive > 1){
        itemActive = itemActive - 1;
      }
      else{
        if (!dataItem){
          return;
        }
        itemActive = dataItem;
      }

      hiddenNextPrev(objClass, itemActive, totalPage);
      paginationCreate(objClass,totalBox, itemActive, totalPage, itemPages, scrollTop);
      activeBox(totalBox, itemActive, itemPages);

      var idTop = document.getElementById(scrollTop);
      if (idTop){
        window.scrollTo({
          top: idTop.offsetTop,
          left: 0,
          behavior: "smooth"
        });
      }
    }
  }
}

function changeIcon(objClass : any, strClass: string, strIcon: string){
  var classStrChange = objClass.getElementsByClassName(strClass);
  var innerStrClass = <HTMLElement>classStrChange[0];
  innerStrClass.innerHTML = strIcon;
}

function createPagination(totalPages: any, page: any) {
  let strStart = `<li class="prev">prev</li>`;
  let strList = "";

  // khi tổng số page nhỏ hơn 5
  if (totalPages < 5){
    for (var i = 1; i <= totalPages; i++) {
      if (i == page) {
        strList += `<li class="active" data-number="${i}">${i}</li>`;
      }
      else {
        strList += `<li data-number="${i}">${i}</li>`;
      }
    }
  }
  else if ((page <= 3 || page >= totalPages - 2) && page > 0 && page <= totalPages) {
    // trường hợp active tạo thành 1 2 3 ... 20
    if (page <= 3) {
      if (page == 3 && totalPages == 5){
        for (var i = 1; i <= totalPages; i++) {
          if (i == page) {
            strList += `<li class="active" data-number="${i}">${i}</li>`;
          }
          else {
            strList += `<li data-number="${i}">${i}</li>`;
          }
        }
      }
      else{
        var visiblePage = page + 1;
        if (page == 1) {
          visiblePage = 3;
        }
        for (var i = 1; i <= visiblePage; i++) {
          if (i == page) {
            strList += `<li class="active" data-number="${i}">${i}</li>`;
          }
          else {
            strList += `<li data-number="${i}">${i}</li>`;
          }
        }
        strList += `<li>...</li>`;
        strList += `<li data-number="${totalPages}">${totalPages}</li>`;
      }
    }
    // trường hợp active tạo thành 1 ... 18 19 20
    else {
      strList += `<li data-number="1">1</li>`;
      strList += `<li>...</li>`;

      var visiblePage2 = page - 1;
      if (page == totalPages) {
        visiblePage2 = totalPages - 2;
      }

      for (var i = visiblePage2; i <= totalPages; i++) {
        if (i == page) {
          strList += `<li class="active" data-number="${i}">${i}</li>`;
        }
        else {
          strList += `<li data-number="${i}">${i}</li>`;
        }
      }
    }
  }
  // trường hợp active tạo thành 1 ... 7 8 9 ... 20
  else if (page > 3 && page < totalPages - 2) {
    strList += `<li data-number="1">1</li>`;
    strList += `<li>...</li>`;
    for (var i = page - 1; i <= page + 1; i++) {
      if (i == page) {
        strList += `<li class="active" data-number="${i}">${i}</li>`;
      }
      else {
        strList += `<li data-number="${i}">${i}</li>`;
      }
    }
    strList += `<li>...</li>`;
    strList += `<li data-number="${totalPages}">${totalPages}</li>`;
  }
  else {
    console.log("error pagination!!!");
    return "";
  }

  let strEnd = `<li class="next">next</li>`;
  return strStart.concat(strList, strEnd);
}
export default{
  pagination: pagination
}