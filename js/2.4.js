$(function() {
	$('.cont').slideUp();
	$('.name').click(function(event) {
		
		
		
		$(this).toggleClass('colblue');
		$(this).next().slideToggle();
		
	});
	
	
});