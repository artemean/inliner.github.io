jQuery(function() {
	jQuery('.scroll').jScrollPane({
		showArrows:true,
		verticalDragMinHeight: 13,
		verticalDragMaxHeight: 13
	});
	
	jQuery(".navigation td:last-child").addClass("last_tda");
	
	$(".navigation td" ).each(function(index) {
		var cc = index + 1
		var foo = "td_" + cc
		$(this).addClass(foo);
	});
	
	jQuery(".news_ex:last-of-type").addClass("nobrd");
	
	jQuery('.faq dd').hide();
	jQuery('.faq dt span').click(function() {
		jQuery(this).parent().next('dd').slideToggle('100');
	});
	
	jQuery(".items").slice(1).addClass("more_marg");
	jQuery(".andanced_search tr td:last-child .inpt2").addClass("td_marg");
	jQuery(".feedback tr td:first-child").addClass("pp");
	jQuery(".consult tr td:first-child, .totals tr td:first-child").addClass("alright");
	jQuery(".article_excerpt:last").addClass("bbrd");
	
	
	jQuery("<div class='overlay'></div>").insertAfter(".main");
	jQuery(".overlay, .consult, .login").hide();
	jQuery(".popup .close, .overlay, .login .close").click(function () {
		$(".popup, .overlay, .login").hide();
	}); 
	jQuery(".link_consult").click(function () {
		$(".overlay").show();
		$(".consult").show();
	});
	jQuery(".cab span").click(function () {
		$(".login").show();
	});
	jQuery(document).mouseup(function (e){
		var container = $(".login");
		if (!container.is(e.target) && container.has(e.target).length === 0)
		{container.hide();}
	});
	
	var bw = jQuery('body').width();
	if(bw < 1255) {jQuery('.content').addClass('over');} else {jQuery('.content').removeClass('over');};
	jQuery(window).resize(function() {
		var bw = jQuery('body').width();
		if(bw < 1255) {jQuery('.content').addClass('over');} else {jQuery('.content').removeClass('over');};
	});
	
	
	var spinner = $(".spin input").spinner();
	
	jQuery(".navigation ul").hide();
	jQuery(".navigation td").hover(
		function () {
			$(this).find("ul").show();
		},
		function () {
			$(this).find("ul").hide();
		});
	
	jQuery(".date_picker").datepicker($.datepicker.regional[ "ru" ]);
	
	jQuery('#j_slides').slides({
		play: 3000,
		pause: 1800,
		hoverPause: true
	});
	
	jQuery(".history .order_details").hide();
	jQuery(".ord").click(function () {
		jQuery(this).parents().next("tr").find(".order_details").toggle();
	});
	
	jQuery(".fiz, .yur").hide();
	jQuery("#lb1, #prad1").click(function () {
		jQuery(".fiz").show();
		jQuery(".yur").hide();
	});
	jQuery("#lb2, #prad2").click(function () {
		jQuery(".yur").show();
		jQuery(".fiz").hide();
	});
	
	jQuery(".form_popup").hide();
	jQuery(".registration input").focus(function(){
		jQuery(this).next(".form_popup").show();
	});
	jQuery(".registration input").blur(function(){
		jQuery(this).next(".form_popup").hide();
	});
	
	$('.c_select').customSelect();
	
});