 $(function(){
 	$(window).scroll(function(event) {

 		if ($('html,body').scrollTop()>31)
 		{
 			$('.sti').addClass('stick');

 		}
 		else
 		{
 			$('.sti').removeClass('stick');
 		}

 	});
})  	
 