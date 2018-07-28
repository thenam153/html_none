$(function() {
	$('.nd').slideUp();
	$('.khoi h3').click(function(event) {
		/* Act on the event */
		console.log('da lc');
		$(this).nextAll('.nd').slideToggle();
		$(this).toggleClass('green');
	});

});