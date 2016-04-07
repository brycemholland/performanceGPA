$(document).ready(function(){

	// This makes a ripple effect when you click on an element.
	// Just add .ripple-button or .ripple-button-dark to any element you'd like to give the ripple effect.
	
	// this is the light version of ripple-button =================

	$(".ripple-button").on("click", function(e){
    	var y = e.pageY - $(this).offset().top;
    	var x = e.pageX - $(this).offset().left;
    	$(this).append('<div class="ripple-circle"></div>');
    	var button_size = $(this).width();
	  	var ripple_circle = $(this).find('.ripple-circle');
	  	ripple_circle.css({
	  		'top': y+'px',
	  		'left': x+'px',
	  		'opacity': '0',
	  		'padding-bottom': '0',
	  		'padding-left': '0',
	  		'width': '0',
		  	'height': '0'
	  	});
	  	ripple_circle.animate({
	  		'padding-bottom': button_size*0.25+'px',
	  		'padding-left': button_size*0.25+'px',
	  		'height': button_size*0.25+'px',
	  		'width': button_size*0.25+'px',
	  		'opacity': '1'
	  	}, 100, "linear", function(){
		  	ripple_circle.animate({
		  		'padding-bottom': button_size*1.5+'px',
	  			'padding-left': button_size*1.5+'px',
	  			'height': button_size*1.5+'px',
	  			'width': button_size*1.5+'px',
		  		'opacity': '0'
		  	}, 500, "linear", function(){
	  			ripple_circle.remove();
	  		});
	  	});
	});

	// this is the dark version of ripple-button =================

	$(".ripple-button-dark").on("click", function(e){
    	var y = e.pageY - $(this).offset().top;
    	var x = e.pageX - $(this).offset().left;
    	$(this).append('<div class="ripple-circle-dark"></div>');
    	var button_size = $(this).width();
	  	var ripple_circle = $(this).find('.ripple-circle-dark');
	  	ripple_circle.css({
	  		'top': y+'px',
	  		'left': x+'px',
	  		'opacity': '0',
	  		'padding-bottom': '0',
	  		'padding-left': '0',
	  		'width': '0',
		  	'height': '0'
	  	});
	  	ripple_circle.animate({
	  		'padding-bottom': button_size*0.25+'px',
	  		'padding-left': button_size*0.25+'px',
	  		'height': button_size*0.25+'px',
	  		'width': button_size*0.25+'px',
	  		'opacity': '1'
	  	}, 100, "linear", function(){
		  	ripple_circle.animate({
		  		'padding-bottom': button_size*1.5+'px',
	  			'padding-left': button_size*1.5+'px',
	  			'height': button_size*1.5+'px',
	  			'width': button_size*1.5+'px',
		  		'opacity': '0'
		  	}, 500, "linear", function(){
	  			ripple_circle.remove();
	  		});
	  	});
	});
});