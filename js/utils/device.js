
// Test si mobile ou tablette ou desktop
var Device = {
	wWindow: $(window).width(),
	mobile: function() {
		if ( $(window).width() <= 767 ) {
			return true;
		} else {
			return false;
		}
	},
	tablet: function() {
		if ( $(window).width() >= 768 && $(window).width() <= 1024 ) {
			return true;
		} else {
			return false;
		}	
	},
	desktop: function() {
		if ( $(window).width() > 1024 ) {
			return true;
		} else {
			return false;
		}	
	},
	ios: function() {
		var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		return iOS;
	}
};
