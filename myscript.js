console.log("loaded myscript.js");

var init = 0;

function scrollTo(myID) {
	var location = '#' + myID;
	$(document.body).animate({
		'scrollTop' : $(location).offset().top -50
	}, 700);
}

function reset() {
	init = 0;
	scrollTo('Top');
}

function closeNav() {
	var navMain = $("#nav-main");
	$("#nav-main").click();
	console.log('bio-nav clicked');
}

$(document).ready(function () {
	// alert("doc is ready");
	$('#aboutus').click(function () {
		scrollTo('Brian');
		closeNav();
	});
	
	$('#ListenLink').click(function () {
		scrollTo('Listen');
		closeNav();
	});

	$('#SocialLink').click(function () {
		scrollTo('Social');
		closeNav();
	});

	$('#Datess').click(function () {
		scrollTo('Coda');
		closeNav();
	});
	
	$('#ContactJeff').click(function () {
	scrollTo('ContactJeff2');
	closeNav();
	});
	
	$('#TriangularNavigationLogo').click(function () {
	scrollTo('Top');
	
	});
	

});

