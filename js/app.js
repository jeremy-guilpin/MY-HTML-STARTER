
// Document Ready
$(function() {

	// ScrollTo
	$('.scrollTo').click(function(e) {
		e.preventDefault();

		var page = $(this).attr('href'), speed = 750, heightMenu = 193, padding = 30;
		if ( page ) {
			var top = ( $(page).offset().top - ( heightMenu - padding ) );
			$('html, body').animate( { scrollTop: top }, speed );
		}

		return false;
	});

	// Scroll
	$(window).scroll(function() {
		if ( $(window).scrollTop() >= Limit.top ) {
			BtnTop.show();
		} else if ( $(window).scrollTop() <= Limit.top ) {
			BtnTop.hide();
		}
	});

	// On ajoute le click sur le bouton top
	BtnTop.event();

	// Init Tooltip
	$('[data-toggle="tooltip"]').tooltip();

});
