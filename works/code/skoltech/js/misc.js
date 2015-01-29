jQuery(function() {

	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		pager:false,
		pause: 5000  
	});
	
	$('[data-toggle="tooltip"]').tooltip();

	$(".faq dt span").click(function () {
		$(this).parent("dt").toggleClass("opened_dt").next("dd").slideToggle();
	});

	$(".qform label").click(function () {
		$(this).toggleClass("caret_down").next(".retractable").slideToggle();
	});

	$(".more a").click(function(e){
		e.preventDefault();
		$(this).next(".report").toggle();
	});
	$(".down_arr a").click(function(e){
		e.preventDefault();
		$(this).parent().next(".comment_form").slideToggle();
		$(this).next(".sub_topics").slideToggle();
		$(this).parent().toggleClass("up_arr");

	});

	$(".write_rev").click(function () {
		$(this).next(".send_review").slideToggle();
	});

	$(".lectures_list > li > b").click(function () {
		$(this).next("ul").slideToggle();
		$(this).parent("li").toggleClass("opened");
	});

	$(".all_comments .heading").click(function () {
		$("#comments_area").toggle("fast");
	});
	$(".menu_button").click(function () {
		$(".collapse_block").slideToggle("fast");
	});

	$(window).resize(function() {
		if ($(window).width() > 751) {
			$( ".collapse_block, .topic_list" ).show();
		} else {
			$( ".collapse_block, .topic_list" ).hide();
		};
		
	});



});