$(document).ready(function(){


  // Variables ==========================================

  var $label = $('.label');
  var $input = $('.input-text-container').find($('.input-text')); 
  var $this_label = $(this).siblings($label);


  // When you type in input, show label ==========================================

  $input.keypress(function(){
    var $this_label = $(this).siblings($label);
    $this_label.animate({
      'opacity':'1'
    }, 200);
  })


  // When input is blured & there's nothing in the input, remove label ==========================================

  $input.blur(function(){
    var $this_label = $(this).siblings($label);
    if ($(this).val() == ""){
      $this_label.animate({
        'opacity':'0'
      }, 200);
    } else{
      $(this).removeClass('validation-error');
    }
  });

});