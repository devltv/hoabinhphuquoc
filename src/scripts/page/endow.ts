import pagination from '../layout/pagination';

function endow1(){
  if (!document.getElementById('endow-1')){
    return;
  }
  // var slideActive = document.querySelectorAll('.endow-1 .endow__right .active .endow-box');
  var options = {
    queryClassPagination: '.endow-1 .endow__right .active .box-pagination',
    listBox: '.endow-1 .endow__right .active .endow-box',
    itemPages: 1,
  }

  pagination.pagination(options);
}

function toggleEndow1(){
  if (!document.getElementById('endow-1')){
    return;
  }

  var listTitle = document.querySelectorAll('.endow-1 .endow__left--items .endow__left--desc');
  
  endow1();

  listTitle.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();

      listTitle.forEach(function(temp){
        temp.classList.remove('active');
      })

      var iActive = this.getAttribute('data-active');
      this.classList.add('active');

      var listRight = document.querySelectorAll('.endow-1 .endow__right .endow__slide');
      listRight.forEach(function(right){
        right.classList.remove('active');
      })
      listRight.forEach(function(itemRight){
        var iActiveRight = itemRight.getAttribute('data-active');
        if (iActive === iActiveRight){
          itemRight.classList.add('active');

          endow1();
        }
      })

      
    })
  })
}

export default {
  endow: function () {
    toggleEndow1();
  }
}