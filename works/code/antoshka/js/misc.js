jQuery(function() {
	
	var te = jQuery('textarea');
	jQuery('textarea').val(function(){
		var tv = $(this).attr('value');
		return tv
	});
	
	jQuery('.s_inp, .inp, .inp2, .f_inp, .tar').focus(function() {
		var el = jQuery(this);
		var vl = el.attr('value');
		if(el.val() == vl){el.val('')}
	}).blur(function() {
		var el = jQuery(this);
		if(el.val() == ''){el.val(el.attr('value'))}
	});
	
	jQuery('.slides_wrap').jcarousel();
	jQuery('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });
    jQuery('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
	
	var pc = jQuery('.pick_city');
	pc.hide();
	jQuery('.where > .js').click(function(){
		pc.show();
	});
	jQuery('.where .close').click(function(){
		pc.hide();
	});
	
	jQuery('.main_body header .side_menu').hide();
	jQuery('.main_body .pi').click(function () {
		jQuery('.main_body header .side_menu').show();
	});
	jQuery('.main_body header .menu_ttl').click(function () {
		jQuery('.main_body header .side_menu').hide();
	});
	
	jQuery('.city_popup').hide();
	//jQuery('.overlay').hide();
	jQuery('.pick_city .js').click(function () {
		jQuery('.overlay').show();
		jQuery('.city_popup').show();
	});
	jQuery('.close2, .overlay').click(function(){
		jQuery('.city_popup, .trans_popup, .simple_popup, .overlay').hide();
	});
	
	jQuery('.login_popup').hide();
	jQuery('.login .js').click(function () {
		jQuery('.login_popup').slideToggle('slow');
		jQuery(this).toggleClass('bld');
	});
	
	jQuery('.how_popup').hide();
	jQuery('.question .js').click(function () {
		jQuery('.how_popup').slideToggle('slow');
		jQuery(this).toggleClass('bld');
	});
	
	jQuery('.questions dd').hide();
	jQuery('.questions .js').click(function () {
		jQuery(this).parents('dt').toggleClass('opened');
		jQuery(this).parents('dt').next("dd").slideToggle("100");
	});
	
	jQuery(".year_sel").ikSelect({
		customClass: "year_sl",
		ddCustomClass: "select_year",
		autoWidth: false,
		ddFullWidth: false
	});
	
	jQuery(".month_sel").ikSelect({
		customClass: "month_sl",
		ddCustomClass: "select_month",
		autoWidth: false,
		ddFullWidth: false
	});
	
	jQuery(".cats").ikSelect({
		autoWidth: false
	});
	
	jQuery("#deliv_time").ikSelect({
		autoWidth: false,
		ddFullWidth: false
	});
	
	jQuery(".but").click(function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();

		if ($button.hasClass('inc')) {
			var newVal = parseInt(oldValue,10) + 1;
			// AJAX save would go here
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseInt(oldValue,10) - 1;
				// AJAX save would go here
			} else {
			  newVal = 1;
			}
		  }
		$button.parent().find("input").val(newVal);
	});
	
	jQuery('.tm_list dd').addClass('clearfloat');
	
	jQuery('.logos_imgs').hide();
	jQuery('.tm_filter .list').addClass('active');
	jQuery('.tm_filter .logos').click(function(){
		jQuery('.logos_imgs').show();
		jQuery('.tm_list').hide();
		jQuery('.tm_filter .logos').addClass('active');
		jQuery('.tm_filter .list').removeClass('active');
	});
	jQuery('.tm_filter .list').click(function(){
		jQuery('.logos_imgs').hide();
		jQuery('.tm_list').show();
		jQuery('.tm_filter .logos').removeClass('active');
		jQuery('.tm_filter .list').addClass('active');
	});
	
	jQuery('.pagination li:last-child').addClass('last_pli');
	
	/* Вертикальное центрирование картинки в блоке */
	var vh = $('.tm_logo').height();
	var vi = $('.tm_logo img').height();
	var vm = (vh - vi)/2
	jQuery('.tm_logo img').css('margin-top',vm);
	
	/* Слайдер цены */
	jQuery( "#slider-range" ).slider({
		range: true,
		step: 50,
		min: 0,
		max: 10000,
		values: [ 100, 1000 ],
		slide: function( event, ui ) {
			jQuery('.minval').text(ui.values[ 0 ]);
			jQuery('.maxval').text(ui.values[ 1 ]);
		}
	});
	jQuery('.minval').text($( "#slider-range" ).slider( "values", 0 ));
	jQuery('.maxval').text($( "#slider-range" ).slider( "values", 1 ));
	jQuery('.ui-slider-handle:first').addClass('left-handle');
	jQuery('.ui-slider-handle:last').addClass('right-handle');
	
	jQuery('#tbl2').hide();
	jQuery('.filter2 div').click(function(){
		jQuery(this).addClass('active_l');
		jQuery(this).siblings().removeClass('active_l');
		if(jQuery('.list_sel').hasClass('active_l')){
			jQuery('#tbl1').show();
			jQuery('#tbl2').hide();
		}else{
			jQuery('#tbl1').hide();
			jQuery('#tbl2').show();
		}
	});
	
	jQuery('.checks, .ship').buttonset();
	
	jQuery('.tr_in').hide();
	jQuery('.or .js').click(function(){
		jQuery(this).parents('tr').next('.tr_in').toggle();
		jQuery(this).parent().toggleClass('opened_or');
	});
	
	jQuery('.side_menu ul a, .excerpt_ttl a, .sitemap a, .tm_list a').wrapInner('<span></span>');
	
	jQuery('.prod_thumb a').hover(function(event){
		event.preventDefault();
		var offset = jQuery(this).offset();
		var off_left = offset.left + 60;
		var off_top = offset.top;
		jQuery('.tbox img').remove();
		var img_url = jQuery(this).attr('href');
		TINY.box.show({
			image:img_url,
			boxid:'frameless',
			animate:true,
			mask:false,
			fixed:false,
			left:off_left,
			top:off_top
		});
	},function(){
		jQuery('.tbox').hide();
	});
	
	
	
});