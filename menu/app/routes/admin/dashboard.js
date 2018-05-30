module.exports = function(application){
	application.get('/admin/dashboard', function(req, res){
		application.app.controllers.admin.dashboard.dashboard(application, req, res);
	});

	application.get('/admin/cadastro-administrador', function(req, res){
		application.app.controllers.admin.dashboard.cadastroAdministrador(application, req, res);
	});

	application.get('/admin/cadastro-funcionario', function(req, res){
		application.app.controllers.admin.dashboard.cadastroFuncionario(application, req, res);
	});

	application.get('/admin/cadastro-usuario', function(req, res){
		application.app.controllers.admin.dashboard.cadastroUsuario(application, req, res);
	});
}