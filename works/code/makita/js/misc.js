jQuery(function() {
	jQuery(".tools_nav li:last").addClass("nobrd");
	jQuery(".catalog_item:last").addClass("nobrd");
	jQuery(".cart_content tr:first td").addClass("nobrd2");
	jQuery(".cart_content tr td:first-child").addClass("pd");
	jQuery(".small_item:first").addClass("nobrd");
	jQuery(".finder td:first-child").addClass("nobrd");
	jQuery(".news_item:last").addClass("nobrd");
	jQuery(".details td:first-child").addClass("bolder");
	jQuery(".details tr:odd td").addClass("bg1");
	
	jQuery(".article_block").addClass("fix_height");
	jQuery(".article_block .arrow").click(function() {
		jQuery(".article_block").toggleClass("fix_height")
	});
	
	jQuery(".additional dd").hide();
	jQuery(".additional dt span").click(function() {
		jQuery(this).parent().next("dd").slideToggle("100");
	});
	
	jQuery(".slider").slides({
		play: 3000,
		pause: 1800,
		hoverPause: true
	});
	
	jQuery('ul.tabs').delegate('li:not(.current)', 'click', function() {
		jQuery(this).addClass('current').siblings().removeClass('current').parents('div.top_products').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	});
	
	jQuery(".thumbs a").colorbox({rel:'gal'});
	
	
	/***---MENU ACTION---***/
	jQuery('.tools_nav > ul > li > a').click(function() {
		jQuery('.tools_nav li').removeClass('active');
		jQuery('.plus').removeClass('minus');
		jQuery('.tools_nav ul ul').slideUp('normal');
		if(jQuery(this).next("ul").is(':hidden') == true) {
			jQuery(this).parent("li").addClass('active');
			jQuery(this).next("ul").slideDown('normal');
		} 
	});
	jQuery('.active > ul').show();
	jQuery(".tools_nav > ul > li ul > li > a").click(function(){
		jQuery(this).next("ul").slideToggle(400);
		jQuery(this).parent("li").toggleClass("minus");
	});
	/***---END MENU ACTION---***/
	
	
	/***---Подбор по параметрам ---***/
	var extra_tr = jQuery(".finder > table > tbody > tr:gt(0)").hide();
	jQuery(".finder .more_p").click(function() {
		extra_tr.toggle();
	});
	/***---END Подбор по параметрам ---***/
	
});