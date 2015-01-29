jQuery(function() {

	jQuery(".menu li:first, .overlay fieldset:first").addClass("nobg");

	jQuery(".faq dd").hide();
	$('.faq dt span').click(function() {
		$(this).parent().next('dd').toggle();
		$(this).toggleClass("nodash");
		$(this).parent().find('.plus').toggleClass("minus");
	});

	
	jQuery(".y_button").overlay({
		mask: {
			color: '#fff',
			loadSpeed: 200,
			opacity: 0.8
		},
		fixed:false
	});
	

	var tabContainers = $('.tab_content');
	tabContainers.hide().filter(':first').show();
	
	if (jQuery('.shop').hasClass('current'))
	{jQuery('.promo_tabs').addClass('active1').removeClass('active2').removeClass('active3')}
	
	if (jQuery('.secure').hasClass('current'))
	{jQuery('.promo_tabs').addClass('active2').removeClass('active1').removeClass('active3')}
	
	if (jQuery('.solution').hasClass('current'))
	{jQuery('.promo_tabs').addClass('active3').removeClass('active2').removeClass('active1')}
	
	
});