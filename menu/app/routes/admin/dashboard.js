module.exports = function(application){
	application.get('/admin/', function(req, res){
		application.app.controllers.admin.dashboard.dashboard(application, req, res);
	});

	application.get('/admin/funcionario', function(req, res){
		// res.send( req.query.page );
		var page = parseInt(req.query.page);
		var limit = parseInt(req.query.limit);

		application.app.controllers.admin.dashboard.funcionario(application, req, res, page, limit);
		// application.app.controllers.admin.dashboard.funcionario(application, req, res, 1, 15);
		// application.app.controllers.admin.dashboard.funcionario(application, req, res, 1, 15);
	});

	// application.get('/admin/funcionario/:page', function(req, res){

	// 	res.send( req.query.page );

	// 	// var page = req.params.page;
	// 	// var limit = req.params.page;

	// 	// application.app.controllers.admin.dashboard.funcionario(application, req, res, page, limit);
	// });

}