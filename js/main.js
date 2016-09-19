function scrollToSection(sec) {
	console.log("test");
	var scroll = $('#'+sec).offset().top;
	$('body').animate(
	{
		scrollTop: scroll - 80
	}
	 , 500, 'swing');
}