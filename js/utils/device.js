
// Test si mobile ou tablette ou desktop
var Device = {
	wWindow: $(window).width(),
	mobile: function() {
		if ( Device.wWindow <= 767 ) {
			return true;
		} else {
			return false;
		}
	},
	tablet: function() {
		if ( Device.wWindow >= 768 && Device.wWindow <= 1024 ) {
			return true;
		} else {
			return false;
		}	
	},
	desktop: function() {
		if ( Device.wWindow > 1024 ) {
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
