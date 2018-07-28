$(document).ready(function(){
	console.log("what's up");

	// $('.ct1').click(function(event) {
	// 	/* Act on the event */
	// 	event.preventDefault();
	// 	console.log("what's up");
	// 	$('body').animate({scrollTop:2000},300);
	// });

  console.log($('.chapter5').offset());
  $('.ct1').click(function(event) {
  	/* Act on the event */
  	event.preventDefault();
  	$('.chapter2').addClass('bacham')
  });
});