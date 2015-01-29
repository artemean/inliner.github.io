$(document).ready(function(){
  $('.bxslider').bxSlider({
	mode: 'fade',
	auto: true,
	pause: 5000
  });

  $(".details_btn").click(function () {
  	$(this).closest(".room_item").find(".room_details").toggle();
  });
  
});