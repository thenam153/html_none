 $(function(){
 	$(window).scroll(function(event) {

 		if ($('html,body').scrollTop()>100)
 		{
 			$('.nav-custom').addClass('nav-scroll');
 		}
 		else
 		{
 			$('.nav-custom').removeClass('nav-scroll')
 		}
 	});
 	$('.bt').click(function(event) {

 		if (this.hash!=="")
 		{
 			event.preventDefault();

 			var cc=this.hash;

 			$('html,body').animate({scrollTop:$(cc).offset().top-170},
 				700, function() {
 					window.location.hash=cc;
 			});
 		}

 	});
 	$('.outline').hover(function() {
 		/* Stuff to do when the mouse enters the element */
 		$(this).first().addClass('ngu');
 	}, function() {
 		/* Stuff to do when the mouse leaves the element */
 		$(this).first().removeClass('ngu');
 	});
})  
 