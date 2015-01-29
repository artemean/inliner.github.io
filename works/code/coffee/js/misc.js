jQuery(function() {
	
	$(".slider_container").slidesjs({
		width: 1300,
		height: 500,
        play: {
		  active: true,
		  effect: "fade",
		  pauseOnHover: true,
          auto: true,
          interval: 3000,
          swap: true
		}
  });
  
$('#uname').val('Name').on('focus', function(){var $this = $(this);if($this.val() == 'Name'){$this.val('').addClass('inp2');}}).on('blur', function(){var $this = $(this);if($this.val() == ''){$this.val('Name').removeClass('inp2');}});
$('#email').val('E-mail').on('focus', function(){var $this = $(this);if($this.val() == 'E-mail'){$this.val('').addClass('inp2');}}).on('blur', function(){var $this = $(this);if($this.val() == ''){$this.val('E-mail').removeClass('inp2');}});
$('#txar').val('Your message').on('focus', function(){var $this = $(this);if($this.val() == 'Your message'){$this.val('').addClass('tar2');}}).on('blur', function(){var $this = $(this);if($this.val() == ''){$this.val('Your message').removeClass('tar2');}});
	
});