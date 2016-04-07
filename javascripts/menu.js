$(document).ready(function(){

// Variables =================================================

  var $hamburger = $(".hamburger-button");
  var $hamburger_nonactive = $(".hamburger-nonactive");
  var $hamburger_active = $(".hamburger-active");
  var $navbar = $(".navbar");
  var $menu = $(".menu");
  var $shadow = $(".shadow");
  var menu_open = false;


// Setup =================================================

  /*
  // give menu extra space on side if in mobile
  if ($menu.width() >= 300){
    $menu.width($menu.width()-56);
  }

  // shorten height of menu to be 100% -hieght of navbar/header
  if ($(window).width() < 959){
    $menu.height( $menu.height()-$navbar.height() );
  } else {
    $menu.height( $menu.height()-$navbar.height() );
  }


// Functions =================================================

  function openMenu(){
    $menu.addClass('menu-open');
    $('html,body').animate({
      scrollTop: $navbar.offset().top
    }, 500);
    $shadow.addClass('shadow-active');
    $hamburger.removeClass('hamburger-nonactive');
    $hamburger.addClass('hamburger-active');
    $('body').addClass('stop-scrolling');
  }

  function closeMenu(){
    $menu.removeClass('menu-open');
    $('html,body').css('overflow','auto');
    $shadow.removeClass('shadow-active');
    $hamburger.removeClass('hamburger-active');
    $hamburger.addClass('hamburger-nonactive');
  }


// Open the menu =================================================

  $hamburger_nonactive.click(function(){
    openMenu();
  });


// Close the menu =================================================

  $shadow.click(function(){
    closeMenu();
  });
  */

});