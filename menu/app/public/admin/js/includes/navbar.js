$(document).ready(function() {
	var containerLeft = $('.container-left');
	var containerRight = $('.container-right');
	var submenu = $('.submenu-item a');
	var menuToggle = $('.container-toggle');
	var menuItem = $('.menu-item');

	if($.cookie('navbar-collapse') == 1){
		menuItem.hide();
		$('.menu-icon-after').hide();
		$('.menu-icon-before').addClass('fa-rotate-180');
		containerLeft.addClass('container-left-toggled');
		containerRight.addClass('container-right-max');
	}else{
		containerLeft.removeClass('container-left-toggled');
		containerRight.removeClass('container-right-max');
	}

	submenu.click(function(event) {

		if($(this).attr('href') == '#')
			event.preventDefault();

		if( $(this).find('.menu-icon-after').hasClass('fa-rotate-270') )
			$(this).find('.menu-icon-after').removeClass('fa-rotate-270')
		else
			$(this).find('.menu-icon-after').addClass('fa-rotate-270');

		$(this).parent('li').find('.submenu').slideToggle(300);
	});

	menuToggle.click(function(event) {

		if( containerLeft.hasClass('container-left-toggled') ){

			$('.menu-icon-before').removeClass('fa-rotate-180');

			containerLeft.removeClass('container-left-toggled');
			containerRight.removeClass('container-right-max');

			setTimeout(function(){
				menuItem.show();	
				$('.menu-icon-after').show();
			}, 50);
		
			$.cookie('navbar-collapse', 0);
		}
		else{
			menuItem.hide();	
			$('.menu-icon-after').hide();
			$('.menu-icon-before').addClass('fa-rotate-180');
			containerLeft.addClass('container-left-toggled');
			containerRight.addClass('container-right-max');

			$.cookie('navbar-collapse', 1);
		}

	});
});