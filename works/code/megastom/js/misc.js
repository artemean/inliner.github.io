jQuery(function() {

	jQuery('#ssrc1').val('найти на сайте').on('focus', function(){var $this = $(this);if($this.val() == 'найти на сайте'){$this.val('');}}).on('blur', function(){var $this = $(this);if($this.val() == ''){$this.val('найти на сайте');}});
	
	$(function () {
		$('[id^="sh"]').hover(function () {
			var index = $(this).attr('id').replace('sh', '');
			$('[id="tip' + index + '"]').toggle();
		});
	});
	
	jQuery('.r_slider, .rotobanner').jcarousel({wrap:'circular'}).jcarouselAutoscroll({
		//'interval': 100
	});
	jQuery('.jcarousel-prev').jcarouselControl({target:'-=1'});
    jQuery('.jcarousel-next').jcarouselControl({target:'+=1'});
	$('.jcarousel-pagination').jcarouselPagination({
		'perPage': 1

	});
	$('.jcarousel-pagination')
    .delegate('a', 'active.jcarouselcontrol', function() {
        $(this).addClass('active');
    })
    .delegate('a', 'inactive.jcarouselcontrol', function() {
        $(this).removeClass('active');
    });
	jQuery('.jcarousel-pagination a:first').addClass('active');
	
	
	jQuery('.qa dd').hide();
	jQuery('.qa .js').click(function(){
		jQuery(this).parent().next('dd').slideToggle();
		jQuery(this).parent().toggleClass('opened');
	});
	
	$('.clouds').hover(function() {
		$('.clouds .plane').animate({
			left: '-=1200',
			top: '-=200'
		}, 900, function() {
			// Animation complete.
		});
	});
	jQuery('.cloud a span').fadeTo(0, 0);
	jQuery('.cloud a').hover(function(){
		jQuery(this).find('span').fadeTo(100,1);
	},function(){
		jQuery(this).find('span').fadeTo(100,0);
	});
	
	jQuery('.tip').hover(function(){
		jQuery(this).toggle();
	});
	
});