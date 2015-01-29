$(document).ready(function(){

  $(".faq dt").click(function () {
  	$(this).next("dd").slideToggle();
  });

  var hp_menu = $(".home_body .main_head .main_nav");
  $('html').click(function (e) {
      if ($(e.target).attr('class') == 'btn') {
          hp_menu.toggle();
      } else {
          if ($(window).scrollTop() > 91) {
              hp_menu.hide();
          }
      }
  });

  
/* Home page top menu item activation */
  function highlightInViewItem() {
      isScrolledIntoView("#advertizers") ? $(".s1").addClass("active") : $(".s1").removeClass("active");
      isScrolledIntoView("#traders") ? $(".s2").addClass("active") : $(".s2").removeClass("active");
      isScrolledIntoView("#agencies") ? $(".s3").addClass("active") : $(".s3").removeClass("active");
  }
  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemTop - docViewTop)<= 220) && ((elemBottom - 70) >= docViewTop);
  }
/* End of Home page top menu item activation */

  $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 91) {
             $('.main_head').addClass('fixed');
             hp_menu.hide();
         }
         else {
             $('.main_head').removeClass('fixed');
             hp_menu.show();
         }
  });
  $(window).bind("scroll", highlightInViewItem);


/* Home page top menu scrolling */
function anchorScroll(fragment) {
    var amount, ttarget;
    //amount = $('.main_head').height();
    amount = 67; //feel bad, but I had to hardcode it...
    ttarget = $('#' + fragment);
    $('html,body').animate({ scrollTop: ttarget.offset().top - amount }, 250, function(){
        highlightInViewItem();
    $(window).bind("scroll", highlightInViewItem);
    });
    return false;
}

function outsideToHash() {
    var fragment;
    if (window.location.hash) {
        fragment = window.location.hash.substring(1);
        anchorScroll(fragment);
    }
}

function insideToHash(nnode) {
    var fragment;
    fragment = $(nnode).attr('href').substring(1);
    anchorScroll(fragment);
}

$(".sections a[href^='#'], .whom a[href^='#']").bind('click',  function () {
    $(window).unbind("scroll", highlightInViewItem);
    insideToHash(this);
});
outsideToHash();
/* End of Home page top menu scrolling */

});