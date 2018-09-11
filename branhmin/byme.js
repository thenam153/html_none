 $(function(){
		$(window).on('load', function() { // makes sure the whole site is loaded 
		  $('#status').fadeOut(); // will first fade out the loading animation 
		  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
		  $('body').delay(350).css({'overflow':'visible'});
		})
 	$(window).scroll(function(event) {
 		if ($('html,body').scrollTop()>0)
 		{
 			$('.navbar').addClass('nav-scroll');
 			if ($('html,body').scrollTop()>100)
 			{
 				$('.backtotop').css('display', 'block');
 			}
 			else
 			{
 				$('.backtotop').css('display', 'none');
 			}
 		}
 		else
 		{
 			$('.navbar').removeClass('nav-scroll');
 		}
 	});
 	$('a').click(function(event) {
 		if (this.hash!=='')
 		{

 			event.preventDefault();
 			var cc=this.hash;
 			$('html,body').animate({scrollTop:$(cc).offset().top}, 800,function(){
 				window.location.hash=cc;
 			})
 		}
 	});
 	// ===============================
 	$('.next').next().css('visibility', 'hidden');

})  
 