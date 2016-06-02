var main = function() {

	$('.menu a').hover(
		function() {
			$(this).addClass('active');
		},
		function() {
			$(this).removeClass('active');
		}
	);


	$('.dropdown-toggle').click(
		function() {
			$('.dropdown-menu').toggle();
		}
	);

	
};




$(document).ready(main);
