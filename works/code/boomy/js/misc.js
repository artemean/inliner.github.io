jQuery(function() {
	
	/*--Popup action--*/
	jQuery("body").append("<div class='mask'/>");
	jQuery(".jsClick").click(function(event) {
		event.preventDefault();
		jQuery(".popup").fadeIn(200);
		jQuery(".mask").fadeIn(100);
	});
	jQuery(".popup .close").click(function() {
		jQuery(".popup").fadeOut(200);
		jQuery(".mask").fadeOut(200);
	});
	jQuery(document).mouseup(function (e){
		var container = jQuery(".popup");
		if (!container.is(e.target) && container.has(e.target).length === 0)
		{
			container.fadeOut(200);
			jQuery(".mask").fadeOut(200);
		}
	});

$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top_bar').stop().fadeIn(150);
        } else {
            $('.top_bar').stop().fadeOut(150);
        }
}); 

});