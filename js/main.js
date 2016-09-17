function scrollToSection(sec) {
	//var scroll = $('#'+sec+'Sec').offset().top;
	$('body').animate({
		scrollTop: scroll - 80
	}, 500, 'swing');
}