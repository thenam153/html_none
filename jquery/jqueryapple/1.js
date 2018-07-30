 $(function(){
 	$('.left').click(function(event) {
 		var active=$('div.active-me');
 		var active_icon=$('li.active-me');
 		var next=$('div.active-me').next();
 		var next_icon=$('li.active-me').next();

 		if (next.length == 0)
 		{
 			active.addClass('outleft').one('webkitAnimationEnd', function(event) {
 			active.removeClass('active-me outleft');
 			/* Act on the event */
 			});
 			$('.slide .images:first-child').addClass('active-me inright').one('webkitAnimationEnd', function(event) {
 			$('.active-me').removeClass('inright');
 		});
 			active_icon.removeClass('active-me');
 			$('ul li:first-child').addClass('active-me');
 		}
 		else
 		{
 		active.addClass('outleft').one('webkitAnimationEnd', function(event) {
 			active.removeClass('active-me outleft');
 			/* Act on the event */
 		});
 		next.addClass('active-me inright').one('webkitAnimationEnd', function(event) {
 			next.removeClass('inright');
 			/* Act on the event */
 		});
 		active_icon.removeClass('active-me');
 		next_icon.addClass('active-me');
 		}
 	});
 	$('.right').click(function(event) {
 		var prev=$('div.active-me').prev();
 		var prev_icon=$('li.active-me').prev();
 		var active=$('div.active-me');
 		var active_icon=$('li.active-me');

 		if (prev.length==0)
 		{
 			active.addClass('outright').one('webkitAnimationEnd', function(event) {
 			/* Act on the event */
 			active.removeClass('active-me outright');
 			});
 			$('.slide .images:last-child').addClass('active-me inleft').one('webkitAnimationEnd', function(event) {
 			$('.active-me').removeClass('inleft');
 		});
 			active_icon.removeClass('active-me');
 			$('ul li:last-child').addClass('active-me');

 		}
 		else
 		{
 		active.addClass('outright').one('webkitAnimationEnd', function(event) {
 			/* Act on the event */
 			active.removeClass('active-me outright');
 		});
 		prev.addClass('active-me inleft').one('webkitAnimationEnd', function(event) {
 			prev.removeClass('inleft');
 			/* Act on the event */
 		});
 		active_icon.removeClass('active-me');
 		prev_icon.addClass('active-me');
 		}
 	});
 	$('.out-slide ul li').click(function(event) {
 		var id_1=$('li.active-me').index()+1;
 		var next=$('div.active-me');
 		var prev=$('div.active-me');
 		var active=$('div.active-me');
 		$('.out-slide ul li').removeClass('active-me');
 		$(this).addClass('active-me');
		var id_2=$(this).index()+1;
		if (id_1<id_2)
		{
			for(id_1;id_1<id_2;id_1++)
			{
				next=next.next();
			}
			active.addClass('outleft').one('webkitAnimationEnd', function(event) {
 			active.removeClass('active-me outleft');
 			/* Act on the event */
 			});
 			next.addClass('active-me inright').one('webkitAnimationEnd', function(event) {
 			next.removeClass('inright');
 			/* Act on the event */
 			});
			
		}
		if (id_1>id_2)
		{
			for(id_2;id_2<id_1;id_2++)
			{
				prev=prev.prev();
			}
			active.addClass('outright').one('webkitAnimationEnd', function(event) {
 			/* Act on the event */
 			active.removeClass('active-me outright');
 			});
 			prev.addClass('active-me inleft').one('webkitAnimationEnd', function(event) {
 			prev.removeClass('inleft');
 			/* Act on the event */
 			});
		}
 	});

})  
 