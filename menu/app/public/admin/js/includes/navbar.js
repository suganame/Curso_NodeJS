$(document).ready(function() {
	var containerLeft = $('.container-left');
	var submenu = $('.submenu-item');
	var menuItem = $('.menu-item');
	var menuToggle = $('.container-toggle');

	// navBar.html('');

	submenu.click(function(event) {

		if( $(this).find('.menu-icon-after').hasClass('fa-rotate-270') )
			$(this).find('.menu-icon-after').removeClass('fa-rotate-270')
		else
			$(this).find('.menu-icon-after').addClass('fa-rotate-270')

		$(this).find('.submenu').slideToggle(300);
	});

	menuToggle.click(function(event) {

		// menuItem.html('');
		if( containerLeft.hasClass('container-left-toggled') ){
			containerLeft.removeClass('container-left-toggled');
		}
		else{
			containerLeft.addClass('container-left-toggled');	
		}

		menuItem.toggle(300);

	});

});