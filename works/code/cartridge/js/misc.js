jQuery(function() {
	
	jQuery(".sel").wSelect();
	
	jQuery(".filter .wSelect:eq(0)").css('z-index','100');

	jQuery(".product_block:nth-child(3n+1)").addClass("nomarg");

	jQuery(".specs tr:even td").addClass("std");
	jQuery(".s_table tr:nth-child(2n+1) td, .text_block tr:nth-child(2n+1) td").not("form tr:nth-child(2n+1) td").addClass("std");
	jQuery(".specs td:first-child").addClass("ftd");
	
	jQuery(".tabs li:first-child").addClass("active");
	jQuery("#tab_content2").hide();
	jQuery(".tabs li").click(function() {
		jQuery(this).siblings().removeClass("active");
		jQuery(this).addClass("active");
		if(jQuery("#tab1").hasClass("active")){
			jQuery("#tab_content1").show();
			jQuery("#tab_content2").hide();
		} else {
			jQuery("#tab_content2").show();
			jQuery("#tab_content1").hide();
		}
	});

	jQuery("#call_back_but").click(function () {
		
	});

	/*--Popup action--*/
	jQuery("body").append("<div class='mask'/>");
	jQuery("#call_back_but").click(function() {
		jQuery("#call_back").fadeIn(200);
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
	

});