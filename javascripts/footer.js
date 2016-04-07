$(document).ready(function(){

// Variables =================================================

  var $footer = $(".footer");
  var $main = $(".main-container");
  var $navbar = $(".navbar");


// Setup =================================================
  
  function adjustFooter(){
    if ($(window).width() > 600){
      $main.css("min-height", ($main.height()-$navbar.height()-$footer.height()-56)+"px" );
    } else {
      $main.css("min-height", ($main.height()-$navbar.height()-$footer.height()-40)+"px" );
    }
  }

  adjustFooter();
  $(window).resize(function(){
    adjustFooter();
  });
  $( window ).on( "orientationchange", function() {
    adjustFooter();
  });

});