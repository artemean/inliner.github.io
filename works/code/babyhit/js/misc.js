jQuery(function() {
	
	jQuery('.banner_slider').slidesjs({
		width: 614,
		height: 280,
		navigation: false,
		play: {
			active: true,
			auto: true,
			interval:2500,
			swap: true
		}
	});
	jQuery('.small_slider_in').slidesjs({
		width: 480,
		height: 187,
		navigation: false,
		play: {
			active: true,
			auto: true,
			interval:2500,
			swap: true
		}
	});
	
	/* left menu action */
		jQuery(".sub_nav .opened a:first").wrap('<div class="fli" />');
		jQuery(".sub_nav li a").not(".sub_nav li li a").before('<span class="arrs" />');
		jQuery(".sub_nav li li:last-child, .sub_nav li:last-child").css("border-bottom",0);
		jQuery(".sub_nav .current").prev().css("border-bottom",0);
		jQuery(".sub_nav .opened li:last").css("padding-bottom",8);
		jQuery(".sub_nav li ul").hide();
		jQuery(".sub_nav .opened ul").show();
		jQuery(".sub_nav .arrs").click(function(){
			jQuery(this).parents("li").toggleClass("opened").find("ul").toggle();
			//jQuery(this).toggleClass("arrs2");
			if(jQuery(this).next("a").parent().is(".fli")){jQuery(this).next("a").unwrap('<div class="fli" />');}else{
				//jQuery(this).next("a").andSelf().before('<div class="fli" />');
				var tt = jQuery(this);

				jQuery(this).next().addBack().wrapAll('<div class="fli" />');
			}
		});
	/* endof left menu action */
	
	/* carousel action*/
		jQuery('.carousel, .brands_carousel').jcarousel({wrap:'circular'}).jcarouselAutoscroll({
			//'interval': 100
		});
		jQuery('.jcarousel-prev').jcarouselControl({target:'-=1'});
	    jQuery('.jcarousel-next').jcarouselControl({target:'+=1'});
		jQuery('.jcarousel-pagination').jcarouselPagination({
			'perPage': 1

		});
		jQuery('.jcarousel-pagination')
		.delegate('a', 'active.jcarouselcontrol', function() {
			jQuery(this).addClass('active');
		})
		.delegate('a', 'inactive.jcarouselcontrol', function() {
			jQuery(this).removeClass('active');
		});
		jQuery('.jcarousel-pagination a:first').addClass('active');
	/* end of carousel action*/
	
	jQuery(".tabs").tabs();
	jQuery(".auth2").hide();
	jQuery(".cancel").click(function(){
		jQuery(".auth2").slideUp();
	});
	jQuery(".ent").click(function(){
		jQuery(".auth2").slideToggle();
	});
	
	jQuery(".shop_body .main_header nav ul li").not(".shop_body .main_header nav ul li li").slice("-3").addClass("asd");
	
	
	jQuery(".tag span").each(function(){
		var ht1 = jQuery(this).parent().height();
		var ht2 = jQuery(this).height();
		var ht3 = (ht1 - ht2) / 2;
		jQuery(this).css("padding-top", ht3);
	});
	
	jQuery(".brands_item").each(function(){
		var ht1 = jQuery(this).parent().height();
		var ht2 = jQuery(this).height();
		var ht3 = (ht1 - ht2) / 2;
		jQuery(this).css("padding-top", ht3);
	});

	// Слайдер выбора цены
		jQuery( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 3000,
		values: [ 300, 2000 ],
		slide: function( event, ui ) {
					jQuery( "#min_amount" ).val(ui.values[ 0 ]);
					jQuery( "#max_amount" ).val(ui.values[ 1 ] );
				}
		});
		jQuery("#min_amount").val(jQuery("#slider-range" ).slider("values", 0));
		jQuery("#max_amount").val(jQuery("#slider-range").slider("values", 1));

		jQuery("#min_amount").change(function() {jQuery("#slider-range").slider("values", 0, jQuery(this).val() );});
		jQuery("#max_amount").change(function() {jQuery("#slider-range").slider("values", 1, jQuery(this).val() );});
	// Endof Слайдер выбора цены

	jQuery(".par_tl").click(function(){
		jQuery(this).next(".params").slideToggle(200).toggleClass("opened");
		jQuery(this).toggleClass("asd");
	});

	jQuery(".specs tr:nth-child(2n+1) td").addClass("tdbg");

	jQuery(".rater").jRating({
		step:true,
		length : 5,
		rateMax : 5,
		showRateInfo : false,
		type : 'small',
		smallStarsPath : 'images/small.png'
	});

	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
		// advance the other slideshow
		slideshows.not(this).cycle('goto', opts.currSlide);
	});
	$('#cs2 .cycle-slide').click(function(){
		var index = $('#cs2').data('cycle.API').getSlideIndex(this);
		slideshows.cycle('goto', index);
	});

	jQuery(".flb").click(function() {
		jQuery(this).next(".file1").click();
	});

	jQuery(".answer .answer_form").hide();
	jQuery(".aclose").click(function() {
		jQuery(this).parents(".answer_form").slideUp();
	});
	jQuery(".sm").click(function() {
		jQuery(this).siblings(".answer_form").slideDown();
	});

	/*--Popup action--*/
	jQuery("body").append("<div class='mask'/>");
	jQuery(".advice").click(function() {
		jQuery(".advice_popup").fadeIn(200);
		jQuery(".mask").fadeIn(100);
	});
	jQuery(".askq").click(function() {
		jQuery(".ask_popup").fadeIn(200);
		jQuery(".mask").fadeIn(100);
	});
	jQuery(".popup .aclose").click(function() {
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

	jQuery(".compare_table td:first-child, .compare_table th:first-child").addClass("nobd");
	jQuery(".compare_table td:last-child, .compare_table th:last-child").addClass("nobdr");

});