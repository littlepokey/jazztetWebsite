var init = 0;

function scrollTo(myID) {
	var location = '#' + myID;
	$(document.body).animate({
		'scrollTop' : $(location).offset().top
	}, 500);
}

function reset() {
	init = 0;
	scrollTo('Top');
}

$(document).ready(function () {

	// when page loads, display top nav
	$('#NewTopNav').slideDown('slow', function () {
		// do nothing
	});

	$('#top-graphic').click(function () {
		// if the nav is showing, hide it
		if ($('#navrow').hasClass('hide')) {}
		else
			$('#navrow').addClass('hide');

		reset();

		if ($('#x1').hasClass('BlackTopNav')) {
			$('#x1').removeClass('BlackTopNav');
		}

		if (!($('#x1').hasClass('ClearTopNav'))) {
			$('#x1').addClass('ClearTopNav');
		}

	});
	$('#aboutus').click(function () {
		scrollTo('Brian');
	});
	
	$('#ListenLink').click(function () {
		scrollTo('Listen');
	});

	$('#SocialLink').click(function () {
		scrollTo('Social');
	});

	$('#Datess').click(function () {
		scrollTo('Coda');
	});

	$(document).scroll(function () {
		init++;

		//make header black and small
		$('#x1').removeClass('ClearTopNav');
		$('#x1').addClass('BlackTopNav');
	});

	$('#NewTopNav').mouseenter(function () {
		if (init > 0) {
			$('#navrow').removeClass('hide');
		}

	});

	$('#NewTopNav').mouseleave(function () {
		if (init > 0) {
			$('#navrow').addClass('hide');
		}
	});
});