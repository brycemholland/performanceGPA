$(document).ready(function(){

// Variables =================================================

  var $footer = $(".footer");
  var $main = $(".main-container");
  var $navbar = $(".navbar");
  var $header = $(".header");
  var $menu = $(".menu");
  var $shadow = $(".shadow");


// Setup =================================================
  
  function adjustFooter(){
    if ($(window).width() >= 960){
      $main.css("min-height", ($main.height()-$header.height()-$navbar.height()-$footer.height()-56)+"px" );
    } else if (($(window).width() < 960) && ($(window).width() > 600)){
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

  /*
  console.log($('body').height());
  if ($footer.offset().top < $(window).height()-$footer.height()){
    $footer.css({
      'position':'absolute',
      'bottom':'0'
    })
  }
  */

});