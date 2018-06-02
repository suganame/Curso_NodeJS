module.exports = function(application){
	application.get('/admin/', function(req, res){
		application.app.controllers.admin.dashboard.dashboard(application, req, res);
	});

	application.get('/admin/funcionario', function(req, res){
		application.app.controllers.admin.dashboard.funcionario(application, req, res, 1, 15);
	});

	application.get('/admin/funcionario/:page/:limit', function(req, res){
		var page = parseInt(req.params.page);
		var limit = parseInt(req.params.limit);

		application.app.controllers.admin.dashboard.funcionario(application, req, res, page, limit);
	});

}