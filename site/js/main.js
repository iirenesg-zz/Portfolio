$(document).ready(function() {

	var menuShown = false;

	$('#mobile-menu-icon').click(toggleMenu);

	$('#overlay-mobile').click(toggleMenu);

	$('#arrow-up').click(function(){
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	});

	function toggleMenu(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#mobile-nav').slideToggle();
		$('#overlay-mobile').toggleClass('hidden');
		menuShown = !menuShown;
		menuShown ? $('#menu-s-display').text('x') : $('#menu-s-display').text('+');
	}
})