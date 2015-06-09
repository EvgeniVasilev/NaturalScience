var sliderInt = 1,sliderNext = 2;
$(document).ready(function () {
	'use strict';
	$("#slider > div#1").fadeIn(350);

	startSlider();
});


function startSlider() {
	'use strict';
	var count = $('#slider > div').size();

	var loop = setInterval(function () {

		if (sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}

		$('#slider > div').fadeOut(350);
		$('#slider > div#' + sliderNext).fadeIn(300);
		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;
	}, 3000);
}