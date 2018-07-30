 $(function(){
 	$(window).scroll(function(event) {
 		/* Act on the event */
 		if($('html,body').scrollTop()>=100)
 		{
 			$('.nav-custom').addClass('scroll-bd');
 			$('.nav-custom').addClass('dark');
 		}
 		else
 		{
 			$('.nav-custom').removeClass('scroll-bd');
 			$('.nav-custom').removeClass('dark');
 		}
 	});
 	$('.backtotop').click(function(event) {
 		/* Act on the event */
 		if (this.hash!=="")
 		{
 			event.preventDefault();

 			var cc=this.hash;

 			$('html,body').animate({scrollTop:$(cc).offset().top}, 800,function(){
 				window.location.hash=cc;
 			})
 		}
 	});
})  
 