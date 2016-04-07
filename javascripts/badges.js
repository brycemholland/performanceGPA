$(document).ready(function(){

  var $stats = $('.badge-stats, .badge-header');
  var $badges = $('.expanded-badge-section');
  var $help_text = $('.badge-help-text');

  var badges_open = false;

  $stats.click(function(){
    $badges.slideToggle();
    if (badges_open){
      badges_open = false;
      $help_text.empty();
      $help_text.append("Click here<br>to expand");
    } else {
      badges_open = true;
      $help_text.empty();
      $help_text.append("Click here<br>to collapse");
    }
  });

});