$(document).ready(function(){


  // Variables ==========================================

  var $number = $('.pagination-number');


  // When you click a pagination number, change active class ==========================================

  $number.click(function(){
    $number.removeClass('pagination-number-active');
    $(this).addClass('pagination-number-active');
  });

});