$(document).ready(function(){


  // Variables ==========================================

  var $tab_container = $('.tab-container');
  var $tab = $('.tab');
  var tab_width;
  var number_of_tabs = $tab_container.children('.tab').size();
  var $active_tab = $('.active-tab')
  var active_tab_index = $active_tab.data('index');
  var $tab_indicator = $('.tab-indicator');
  var speed = 100;
  var $tab_panel = $('.tab-panel');


  // Functions ==========================================

  function setup(){
    if ($tab_container.parent().width() >= 600){
      $tab_container.css('width','600px');
    } else {
      $tab_container.css('width','100%');
    }

    $tab.width($tab_container.width()/number_of_tabs);
    tab_width = $tab_container.width()/number_of_tabs;

    $tab_indicator.css('left', "0" );
    $tab_indicator.css('right', (tab_width*(number_of_tabs-1))+"px");
  }


  // Setup ==========================================

  setup();
  $( window ).on( "orientationchange", function() {
    setup();
  });

  active_tab_index = $tab_container.find($active_tab).attr('data-index');
  
  // When tab is clicked ==========================================

  $tab.click(function(){
    var $this = $(this);
    var this_index = $this.data('index');

    // move indicator
    if (this_index > active_tab_index){ // determine which direction the indicator is moving
      var moving_right = true;
    } else {
      var moving_right = false;
    }
    if (this_index != active_tab_index){ // only move if not clicking current tab
      if (moving_right){
        $tab_indicator.animate({ "right": (tab_width*((number_of_tabs-1)-this_index))+"px" }, speed, function(){
          $tab_indicator.animate({ "left": (tab_width*this_index)+"px"}, speed);
        });
      } else {
        $tab_indicator.animate({ "left": (tab_width*this_index)+"px"}, speed, function(){
          $tab_indicator.animate({ "right": (tab_width*((number_of_tabs-1)-this_index))+"px" }, speed);
        });
      }
    }

    // update active tab
    $tab.removeClass('active-tab');
    $this.addClass('active-tab');

    // change tab panels
    if ( this_index != active_tab_index ){
      active_tab_index = $this.data('index');
      $tab_panel.slideUp();
      $this.parents('.board').find($('.tab-panel[data-index="'+active_tab_index+'"]')).slideToggle();
    }
  });

});