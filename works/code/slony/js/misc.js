jQuery(function() {
	
	jQuery('#banner_slider').bjqs({
		'height' : 340,
		'width' : 960,
		'showcontrols' : false,
		'usecaptions' : false,
		'centermarkers' : false
	});

	var ov_size = jQuery(".single_item").size() * jQuery(".single_item").outerWidth();
	jQuery(".new_items_scroll .overview").width(ov_size);
	jQuery(".new_items_scroll").tinyscrollbar({ axis: "x"});

	jQuery(".c6 li:even").width(260);

	/*--Popup action--*/
	jQuery("body").append("<div class='mask'/>");
	jQuery(".lock").click(function() {
		jQuery(".sign_in").fadeIn(200);
		jQuery(".mask").fadeIn(100);
	});
	jQuery(".register").click(function() {
		jQuery(".sign_in").fadeOut(200);
		jQuery(".registration").fadeIn(100);
	});
	jQuery(".head_cart .bbut").click(function() {
		jQuery(".cart_popup").fadeIn(200);
		jQuery(".mask").fadeIn(200);
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

	jQuery( "#tabs" ).tabs();

	jQuery(".cart_button").click(function(){
		jQuery(".short_cart_content").show();
	});
	jQuery(".cart_total").click(function(){
		jQuery(".short_cart_content").hide();
	});

	jQuery(".spinner").spinner({min: 0});

	jQuery(".sel").wSelect();

	jQuery(".cart_item:odd").addClass("str");

});