$(document).ready(function() {
	var item = $('.menu-item-submenu');


	item.click(function(event) {
		if(this).hasClass('submenu-active') {
			console.log('tem a classe');
		}
		else{
			console.log('não tem a classe');
		}
	});
});