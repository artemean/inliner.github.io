jQuery(function() {

	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top_bar').fadeIn(150);
        } else {
            $('.top_bar').fadeOut(150);
        }
	});

	 $(".header__item-drop").on("click", function(e) {
        return e.preventDefault(), $(this).parent(".header__menu li").find(".header__submenu").addClass("show"), !1
    }), $(".header__submenu li a").on("click", function(e) {
        e.preventDefault(), $(this).parents(".header__menu li").find(".header__submenu").removeClass("show")
    }), $(".header__submenu").mouseleave(function() {
        $(".header__submenu").removeClass("show")
    }), $(".header__btn").on("click", function() {
        $(this).parent(".menu_wrap").find(".header__menu").toggleClass("open"), $(this).toggleClass("is-open")
    });

	// Tooltip is shown using Bootstrap tooltip
	$(".form-group.has-error input").tooltip({
		'container': 'body'
   });

});