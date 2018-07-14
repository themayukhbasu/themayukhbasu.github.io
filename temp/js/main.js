/* jQuery for page scrolling feature */

$(".page-scroll a").click(function() {
	var $anchor = $(this);
    $('html, body').animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 600);
    return false;
});