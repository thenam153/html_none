 $(function(){

 	
 	$(window).scroll(function(event) {
 		if ($('html,body').scrollTop()>=120)
 		{
 			$('.nav-custom.nav-mini').addClass('in');
 		}
 		else
 		{
 			$('.nav-custom.nav-mini').removeClass('in');
 		}
 		if ($('html,body').scrollTop()>=220)
 			{
 				$('.up').addClass('in-1');
 			}
 			else
 			{
 				$('.up').removeClass('in-1');
 			}
 	});
 	$('.nav-hover').hover(function() {
 		/* Stuff to do when the mouse enters the element */
 		$('.content-1').addClass('index-z');
 	}, function() {
 		/* Stuff to do when the mouse leaves the element */
 		$('.content-1').removeClass('index-z');
 	});
 	$('.scr').click(function(event) {

 		if (this.hash!=="")
 		{
 			event.preventDefault();

 			var cc=this.hash;
 			$('html,body').animate({scrollTop:$(cc).offset().top},
 				400, function() {
				
				window.location.hash=cc; 					
 			});
 		}

 	});
})  
 