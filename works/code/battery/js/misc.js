jQuery(function() {
	jQuery('.banner_slider_in').slidesjs({
		width: 302,
        height: 370,
		navigation: false,
		play: {
          active: true,
          auto: true,
          interval:2500,
          swap: true
        }
	});
	
	jQuery('.scroll').jScrollPane({
		showArrows:true,
		verticalDragMinHeight: 13,
		verticalDragMaxHeight: 13,
		paneWidth: 185,
		contentWidth: 185
	});
	
	jQuery(".cat_prod_block:even").addClass("cp_even");
	jQuery(".pagination:eq(1)").addClass("pg2");
	
	// Слайдер выбора цены
	jQuery( "#slider-range" ).slider({
	range: true,
	min: 0,
	max: 3000,
	values: [ 100, 1000 ],
	slide: function( event, ui ) {
				$( "#min_amount" ).val(ui.values[ 0 ]);
				$( "#max_amount" ).val(ui.values[ 1 ] );
			}
	});
	$("#min_amount").val(jQuery("#slider-range" ).slider("values", 0));
	$("#max_amount").val(jQuery("#slider-range").slider("values", 1));

	$("#min_amount").change(function() {$("#slider-range").slider("values", 0, $(this).val() );});
	$("#max_amount").change(function() {$("#slider-range").slider("values", 1, $(this).val() );});
	// Endof Слайдер выбора цены
	
	jQuery(".c_block td:first-child, .ordering td:first-child, .order_history td td:first-child").addClass("ftd");
	jQuery(".order_history td:last-child").addClass("brd");
	
	jQuery( "#datepicker" ).datepicker({
		changeYear: false,
		showOtherMonths: true
	});
	
	jQuery( ".spinner" ).spinner({min: 0});
	
	jQuery('#num1').bind('input propertychange', function () {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
	});
	
	jQuery(".top_head .enter").click(function(){
		jQuery(".login_popup, .dummy").toggle(200);
	});
	jQuery(".login_popup .cls, .dummy").click(function(){
		jQuery(".login_popup, .dummy").hide(200);
	});
	jQuery(".dummy").wrapInner('<div class="in1" />');
	
	
	$(".scrollable").scrollable();

	$(".items img").click(function() {
		if ($(this).hasClass("active")) { return; }
		var url = $(this).attr("alt");
		var wrap = $("#image_wrap").fadeTo("fast", 1);
		var img = new Image();
		img.onload = function() {
			wrap.fadeTo("fast", 1);
			wrap.find("img").attr("src", url);
		};
		img.src = url;
		$(".items img").removeClass("active");
		$(this).addClass("active");
	}).filter(":first").click();
	
	
	$(".single_item_img img[rel]").overlay({
		mask: {
        color: '#000000',
        loadSpeed: 300,
        opacity: 0.5
      }
	});
	
	$(".map_img[rel]").overlay({
		mask: {
        color: '#000000',
        loadSpeed: 300,
        opacity: 0.5
      }
	});
	
});

