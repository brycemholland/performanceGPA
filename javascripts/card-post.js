$(document).ready(function(){

  var $cardArea = $('.card-area');
  var colWidth;

  function resizeCardArea(){
    if ($cardArea.width() >= 944){
      //colWidth = 236;
      colWidth = 314;
    } else if (($cardArea.width() < 944) && ($cardArea.width() > 467)){
      colWidth = 304;
    } else {
      colWidth = 304;
    }


    $('.card').css('width', colWidth+"px");
    $('.card-area').masonry({
      // options
      itemSelector: '.card',
      columnWidth: colWidth
    });
  }

  resizeCardArea();

  $(window).resize(function(){
    resizeCardArea();
  });

});