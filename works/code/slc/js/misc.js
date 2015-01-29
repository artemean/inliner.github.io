jQuery(function() {
	
	/*--Show more action--*/
	jQuery(".trg").click(function(){
		jQuery(this).find(".trig1").toggle();
		jQuery(this).find(".trig2").toggle();
		jQuery(this).parent().prev().find(".excerpt").toggleClass("fheight");
	});
	/*--End of Show more action--*/

	jQuery(".single_pattern:nth-child(4n+1)").addClass("nomarg");

	
	/*--popup_menu action--*/
	jQuery(".popup_menu:first td:odd").addClass("mp");

	jQuery(".slide_ttl:lt(2), .cycle-slideshow:lt(2)").click(function(){
		var target = jQuery(this).siblings(".popup_menu");
		jQuery(".popup_menu").hide();
		jQuery(".slider_holder").removeClass("z1000");
		if (target.is(":hidden")) {target.slideDown()};
		jQuery(this).parent().addClass("z1000");
		jQuery(".top_navigation ul ul").hide();
	});
	jQuery(".popup_menu .close").click(function(){
		jQuery(".popup_menu").slideUp();
		jQuery(".slider_holder").removeClass("z1000");
	});
	jQuery(".popup_menu:eq(1)").addClass("cn");
	/*--End of popup_menu action--*/

	
	/*--Popup action--*/
	jQuery("body").append("<div class='mask'/>");
	jQuery(".call").click(function() {
		jQuery(".callback").fadeIn(200);
		jQuery(".mask").fadeIn(100);
	});
	jQuery("#but1").click(function() {
		jQuery(".order_measure").fadeIn(200);
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
	/*--End of Popup action--*/

	var menuBlock = jQuery('#products_table').offset();
	var fixedBlock = jQuery('#fixedBlock');

	jQuery('#fixed-menu [class^="a"]').each(function(){
		var index = jQuery(this).attr('class').replace('a', '');
		jQuery(this).width(jQuery('[class="b' + index + '"]').width());
	});

	jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > menuBlock.top){
	fixedBlock.css('display', 'block');
	} else if(jQuery(this).scrollTop() <=menuBlock.top) {
	fixedBlock.css('display', 'none');
	}
	});

	jQuery('.goup').click(function() {  
		jQuery('body,html').animate({scrollTop:0},500);  
		return false;  
	});

	jQuery(".top_navigation ul ul").hide();
	jQuery(".top_navigation>ul>li, .mclose1").click(function() {
		jQuery(".top_navigation ul ul").not(jQuery(this).children("ul")).hide();
		jQuery(this).children("ul").toggle();
		jQuery(".popup_menu").hide();
		jQuery(".slider_holder").removeClass("z1000");
	});

	jQuery("<li class='mclose'><span>закрыть</span></li>").appendTo(jQuery(".top_navigation>ul>li:lt(2) ul, .main_footer .top_navigation>ul>li:lt(2) ul"));

});