$(document).ready(function(){
// ---------------------------------------------------------
// stbFix
// ---------------------------------------------------------
if (typeof stb !== 'undefined' && stb.stbElement != '') {
	var element = jQuery(stb.stbElement);
	if(element.length === 0){
		stb.stbElement = '';
	}
}
// ---------------------------------------------------------
// Tabs
// ---------------------------------------------------------
$(".tabs").each(function(){

		$(this).find(".tab").hide();
		$(this).find(".tab-menu li:first a").addClass("active").show();
		$(this).find(".tab:first").show();
});

$(".tabs").each(function(){

		$(this).find(".tab-menu a").click(function() {
				$(this).parent().parent().find("a").removeClass("active");
				$(this).addClass("active");
				$(this).parent().parent().parent().parent().find(".tab").hide();
				var activeTab = $(this).attr("href");
				$(activeTab).fadeIn();
				return false;
		});
});

// ---------------------------------------------------------
// Toggle
// ---------------------------------------------------------

$(".toggle").each(function(){

		$(this).find(".box").hide();

});

$(".toggle").each(function(){

		$(this).find(".trigger").click(function() {
				$(this).toggleClass("active").next().stop(true, true).slideToggle("normal");
				return false;
		});

});


// ---------------------------------------------------------
// Back to Top
// ---------------------------------------------------------

// fade in #back-top
jQuery(function () {
	jQuery(window).scroll(function () {
		var width = parseInt(jQuery('.container').first().width() / 2) + 30;

		if (jQuery(this).scrollTop() > 100) {
			jQuery('#back-top').fadeIn().css('margin-left',width);
		} else {
			jQuery('#back-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	jQuery('#back-top a').click(function () {
		jQuery('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});


});