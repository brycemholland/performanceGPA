$(document).ready(function(){


  // Variables ==========================================

  var $input = $('.input-dropdown, .arrow'); 
  var $blanket = $('.dropdown-blanket');
  var $notInput = $('form:not(".dropdown-option, .dropdown-option-container, .input-dropdown, .input-dropdown-container, form")');
  var $dropdown = $('.dropdown-option-container');
  var $option = $('.dropdown-option');
  var $arrow = $('.arrow');


  // When you type in input, show label ==========================================

  $input.click(function(){
    var $this_dropdown = $(this).siblings('.dropdown-option-container');
    $this_dropdown.animate({
      'height':'270%',
      'top':'0'
    }, 200);
    $(this).removeClass('validation-error');
    $blanket.css('display','block');
  });

  $option.click(function(){
    var option_value = $(this).attr("data-option");
    var option_text = $(this).text();
    var $this_dropdown = $(this).parent();
    var $this_input = $this_dropdown.siblings('.input-dropdown');
    var $hidden_input = $this_dropdown.siblings('input');
    $hidden_input.val(option_value);
    $this_input.empty();
    $this_input.append(option_text);
    $this_dropdown.animate({
      'height':'0%',
      'top':'16px'
    }, 200);
    $blanket.css('display','none');
  });

  $blanket.click(function(){
    var $this_input = $(this);
    var $this_dropdown = $(this).siblings('.dropdown-option-container');
    $dropdown.delay(100).animate({
      'height':'0%',
      'top':'16px'
    }, 200);
    $blanket.css('display','none');

    // check to see if the text field value matches one of the options
    var input_value_is_valid = false;
    $this_dropdown.find($option).each(function(){
      if ( $this_input == $(this).attr("data-option") ){
        input_value_is_valid = true;
      }
    });

    // if the text field value is not one of the options, clear the field
    if (input_value_is_valid == false){
      $this_input.val("");
    }
  });

});