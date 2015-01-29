jQuery(function() {
	jQuery( ".slider-range" ).slider();
	jQuery( ".spinner" ).spinner({ min: 0 });

	jQuery(".special_item:odd").addClass("right");
	jQuery(".generic_text tr:odd, .styled_table tr:odd").addClass("graybg");

	jQuery( "#tabs" ).tabs();/*jQueryUI tabs*/

	/*--Side menu expantion--*/
	jQuery(".side_menu li ul").hide();
	jQuery(".active ul").show();
	jQuery(".toggler").each(function(){
		if (jQuery(this).siblings("ul").length > 0 ) {
			jQuery(this).addClass("closed");
		} else {jQuery(this).hide();}
	});
	jQuery(".active .closed").addClass("opened");

	jQuery(".toggler").click(function(){
		jQuery(this).siblings("ul").slideToggle();
		jQuery(this).toggleClass("opened");
	});
	/*--End of side menu expantion--*/

	jQuery(".hidden_tr").hide();
	jQuery(".drop").click(function(){
		jQuery(".hidden_tr").toggle();
	});

});