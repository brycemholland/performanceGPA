$(document).ready(function(){


  // Variables ==========================================

  var $input_container = $('.input-comment-container'); 
  var $input = $('.input-comment-container').find($('.input-comment')); 

  // Setup ==========================================
  
  $input.autosize();
  $input.width($input.width()-90);

  $input.keypress(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13){
      e.preventDefault();
      $("#comment-form").submit();   
    }
  });
  

  // When input is blured & there's nothing in the input, remove validation-error ==========================================

  $input.blur(function(){
    $(this).removeClass('validation-error');
  });

});