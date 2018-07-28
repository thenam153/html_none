$(function() {
	
	$('.more').slideUp(0);
	$('._col ').click(function(event) {
		/* Act on the event */
		$('.more ').slideToggle(10000);
	});
	TweenMax.from($('.oneblock'),1,{top:400,opaciti:0})
	TweenMax.from($('._col'),1,{top:1000,opaciti:0})
});