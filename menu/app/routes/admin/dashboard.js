module.exports = function(application){
	application.get('/admin/dashboard', function(req, res){
		application.app.controllers.admin.dashboard.dashboard(application, req, res);
	});
}