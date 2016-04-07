$(document).ready(function(){

// Variables =================================================

  var $navbar = $(".navbar");
  var $header = $(".header");
  var $footer = $(".footer");
  var $hamburger = $(".hamburger-button");
  var $menu = $(".menu");
  var $main = $(".main-container");
  var $postButton = $(".post-button");
  var $post = $(".post");
  var $sortButton = $(".sort-button");
  var $sort = $(".sort");
  var $shadow = $(".shadow");
  var menuHidden = true;
  var postHidden = true;
  var sortHidden = true;
  var scrollTarget = $navbar;


// Setup =================================================


  // give menu extra space on side if in mobile
  if ($menu.width() >= 300){
    $menu.width($menu.width()-56);
  }

  // shorten height of menu to be 100% -hieght of navbar/header
  if ($(window).width() >= 960){
    scrollTarget = $header;
    $menu.height( $main.height()+$footer.height()+56 );
    $menu.css("max-height", (parseInt($menu.css("max-height"))-$header.height()-$navbar.height())+"px" );
    $shadow.height( $main.height()+$footer.height()+56 );
  } else if (($(window).width() < 960) && ($(window).width() > 600)){
    scrollTarget = $navbar;
    $menu.height( $main.height()+$footer.height()+56 );
    $menu.css("max-height", (parseInt($menu.css("max-height"))-$navbar.height())+"px" );
    $shadow.height( $main.height()+$footer.height()+56 );
  } else {
    scrollTarget = $navbar;
    $menu.height( $main.height()+$footer.height()+40 );
    $menu.css("max-height", (parseInt($menu.css("max-height"))-$navbar.height())+"px" );
    $shadow.height( $main.height()+$footer.height()+40 );
  }
  /*
  if ($(window).width() < 959){
    $menu.height( $(window).height()-$navbar.height() );
  } else {
    $menu.height( $(window).height()-$navbar.height() );
  }
  */


// Functions =================================================

  function openMenu(){
    $menu.addClass('menu-open');
    $hamburger.addClass('nav-button-active');
    menuHidden = false;
  };

  function closeMenu(){
    $menu.removeClass('menu-open');
    $hamburger.removeClass('nav-button-active');
    menuHidden = true;
  };

  function openPost(){
    $post.addClass('post-open');
    $postButton.addClass('nav-button-active');
    postHidden = false;
  };

  function closePost(){
    $post.removeClass('post-open');
    $postButton.removeClass('nav-button-active');
    postHidden = true;
  };

  function openSort(){
    $sort.addClass('sort-open');
    $sortButton.addClass('nav-button-active');
    sortHidden = false;
  };

  function closeSort(){
    $sort.removeClass('sort-open');
    $sortButton.removeClass('nav-button-active');
    sortHidden = true;
  };

  function shadow(){
    if (menuHidden && postHidden && sortHidden){
      $shadow.removeClass('shadow-active');
      $('html').css('overflow','auto');
    } else {
      $shadow.addClass('shadow-active');
      $('body').animate({
        scrollTop: scrollTarget.offset().top
      }, 500);
      $('html').css('overflow','hidden');
    }
  }


// Open the menu =================================================

  $hamburger.click(function(){
    if (menuHidden){
        openMenu();
        closePost();
        closeSort();
    } else {
        closeMenu();
    }
    shadow();
  });


// Open the post =================================================

  $postButton.click(function(){
    if (postHidden){
        openPost();
        closeMenu();
        closeSort();
    } else {
        closePost();
    }
    shadow();
  });


// Open the sort =================================================

  $sortButton.click(function(){
    if (sortHidden){
        openSort();
        closeMenu();
        closePost();
    } else {
        closeSort();
    }
    shadow();
  });


// Close the menu =================================================

  $shadow.click(function(){
    closeMenu();
    closePost();
    closeSort();
    shadow();
  });

  


});