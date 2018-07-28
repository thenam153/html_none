$(function() {
	$('.layer').removeClass('unappear');	
		$('.cover').addClass('appearforone');
		$('.layer').addClass('appear');
		var notcut=setInterval(function(){
			$('.cover').removeClass('appearforone');
			$('.layer').removeClass('appear');
			$('.layer').addClass('unappear');
			clearInterval(notcut);
		},2000);



	$('.btn').click(function(event) {
		/* Act on the event */
		$('.layer').removeClass('unappear');	
		$('.cover').addClass('appearforone');
		$('.layer').addClass('appear');

	});
	$('.btn-me').click(function(event) {
		/* Act on the event */
		$('.cover').removeClass('appearforone');
		$('.layer').removeClass('appear');
		$('.layer').addClass('unappear');
	});
});