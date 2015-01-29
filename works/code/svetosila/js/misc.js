jQuery(function() {

	// This adds 'placeholder' to the items listed in the jQuery .support object. 
	jQuery(function() {
		jQuery.support.placeholder = false;
		test = document.createElement('input');
		if('placeholder' in test) jQuery.support.placeholder = true;
	});
	// This adds placeholder support to browsers that wouldn't otherwise support it. 
	$(function() {
		if(!$.support.placeholder) { 
			var active = document.activeElement;
			$(':text').focus(function () {
				if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
					$(this).val('').removeClass('hasPlaceholder');
				}
			}).blur(function () {
				if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
					$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
				}
			});
			$(':text').blur();
			$(active).focus();
			$('form:eq(0)').submit(function () {
				$(':text.hasPlaceholder').val('');
			});
		}
	});
	
	
	$(".but").click(function() {
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
	
	$('.sch span, .schedule').hover(function() {$('.schedule').toggle();});
	
	/* Попап для фильтра параметров */
	var parspan = $(".par span");
	parspan.mouseenter(function() {
		$('.param').removeClass('z10');
		$(this).parents('.param').toggleClass('z10');
		$('.additional').hide();
		$(this).parent().next(".additional").show();
	});
	parspan.click(function() {
		$(this).parents('.param').toggleClass('z10');
		if($(this).parent().next(".additional").is(':visible')){
			$(this).parent().next(".additional").hide();
		} else {$(this).parent().next(".additional").show();}
	});
	$(".additional").mouseleave(function(){
		$(this).hide().parent('.param').removeClass('z10');
	});
	$(".close").click(function() {
		$(this).parent(".additional").hide();
		$(this).parents('.param').removeClass('z10');
	});
	/* END Попап для фильтра параметров */
	
	$('.form_fields').hide();
	$('.rdb label, .rdb input').click(function(){
		$(this).parents('td').find('.form_fields').hide();
		$(this).parent().next('.form_fields').show();
		$(this).parents('td').find('.rdb').removeClass('bold');
		$(this).parent().addClass('bold');
	});
	
	//$('.slider').jScrollPane({showArrows: true});
	 var api = $('.slider').jScrollPane().data('jsp');
    $('.slideup').bind(
        'mousedown',
        function()
        {
            var interval = setInterval(
                function()
                {
                    api.scrollByY(-10);
                },
                100
            );
            $(window).bind(
                'mouseup.jspExample',
                function()
                {
                    clearInterval(interval);
                    $(document).unbind('.jspExample');
                }
            );
        }
    );
    $('.slidedown').bind(
        'mousedown',
        function()
        {
            var interval = setInterval(
                function()
                {
                    api.scrollByY(10);
                },
                100
            );
            $(window).bind(
                'mouseup.jspExample',
                function()
                {
                    clearInterval(interval);
                    $(document).unbind('.jspExample');
                }
            );
        }
    );
	
	$('.slider').append('<div class="shade"></div>');
	$('.catalogue .param_block:first').css('border-top',0);
	
	$('.catalogue').hide();
	$('.drop_down').click(function(){
		$('.catalogue').show();
	});
	$('.close2').click(function(){
		$('.catalogue').hide();
	});
	
	$('.full_search .s_sbm').hover(function(){
		$(this).parents('.full_search').toggleClass('fsh');
	}).mousedown(function(){
		$(this).parents('.full_search').addClass('fsh2');
	});
	
	
});