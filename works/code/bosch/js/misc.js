jQuery(function() {
	jQuery(".slider").slidesjs({
		width: 653,
		height: 245,
		navigation: false,
		play: {
			active: true,
			auto: true,
			interval:2500,
			swap: true
		}
	});

	jQuery(".tabs, .ntabs").tabs();

	/*--Разворачивание бокового меню--*/
	jQuery(".side_menu li span").click(function(){
		var li = jQuery(this).closest('li');
		li.toggleClass('opened').find('>ul').slideToggle();
		li.siblings('.opened').removeClass('opened').find('>ul').slideToggle();
	});
	jQuery('.side_menu').find('.opened').each(function() {
        jQuery(this).find('>ul').show();
    });
	/*--END Разворачивание бокового меню--*/

	jQuery(".news_item:last").css("border-bottom",0);
	jQuery(".details td:first-child").addClass("bolder");
	jQuery(".details tr:odd td").addClass("bg1");
	jQuery(".items_in_cart tr:odd td").addClass("bg2");

	jQuery(".additional dd").hide();
	jQuery(".additional dt span").click(function() {
		jQuery(this).parent().next("dd").slideToggle("100");
	});

	/* ---Подбор по параметрам --- */
		var extra_tr = jQuery(".finder tr:gt(0)").not("tr tr").hide();
		jQuery(".finder .more_p").click(function() {
			extra_tr.slideToggle(200);
		});
	/* ---END Подбор по параметрам --- */

	jQuery(".thumbs a").colorbox({rel:'gal'});
});