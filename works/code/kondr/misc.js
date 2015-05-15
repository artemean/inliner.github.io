$(document).ready(function(){
	$(".thumbnails .bg0").each(function(){
		$(this).width($(this).parent().width());
	});
	
	$(function() {
		$(".catalog tr:nth-child(odd)").addClass("striped");
	});
	
	$(".catalog tr").hover(function () {
      $(this).children("td").addClass("darker");
    }, function () {
      $(this).children("td").removeClass("darker");
    });
	
 });