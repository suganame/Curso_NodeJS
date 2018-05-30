$(document).ready(function() {
	var containerLeft = $('.container-left');
	var submenu = $('.submenu-item');	
	var menuToggle = $('.container-toggle');
	var menuItem = $('.menu-item');

	// navBar.html('');

	submenu.click(function(event) {

		if( $(this).find('.menu-icon-after').hasClass('fa-rotate-270') )
			$(this).find('.menu-icon-after').removeClass('fa-rotate-270')
		else
			$(this).find('.menu-icon-after').addClass('fa-rotate-270')

		$(this).find('.submenu').slideToggle(300);
	});

	menuToggle.click(function(event) {

		

		// menuItem.toggleClass();

		if( containerLeft.hasClass('container-left-toggled') ){

			$('.menu-icon-before').removeClass('fa-rotate-180');

			containerLeft.removeClass('container-left-toggled');

			setTimeout(function(){
				menuItem.show();	
				$('.menu-icon-after').show();
			}, 130);
			
			
		}
		else{
			menuItem.hide();	
			$('.menu-icon-after').hide();
			$('.menu-icon-before').addClass('fa-rotate-180');
			containerLeft.addClass('container-left-toggled');
			
		}
		// });

	});
});