$(document).ready(function(){

	$('.boton-flecha').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.boton-flecha').slideDown(300);
		} else {
			$('.boton-flecha').slideUp(300);
		}
	});

});
