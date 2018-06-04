$(document).ready(function() {
	var novoCadastro = $('#novo-cadastro');
	var cancelarCadastro = $('#cancelar-cadastro');
	var formModal = $('.form-modal');
	var formModalContent = $('.form-modal-content');
	
	novoCadastro.click(function(event) {
		event.preventDefault();
		formModal.slideToggle(250, function(){
			formModalContent.slideToggle(200);
		});
	});
	cancelarCadastro.click(function(event) {
		event.preventDefault();
		formModalContent.slideToggle(250, function(){
			formModal.slideToggle(200);
		});
	});
});