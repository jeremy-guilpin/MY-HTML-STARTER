
var BtnTop = {
	show: function() {
		$('#btn-scroll-top').fadeIn();
	},
	hide: function() {
		$('#btn-scroll-top').fadeOut();
	},
	event: function() {
		$('#btn-scroll-top').click(function(e) {
			e.preventDefault();
			$('html, body').animate( { scrollTop: 0 }, 750 );
		});
	}
};
