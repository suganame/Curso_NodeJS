module.exports = function(application){
	application.get('/dashboard', function(req, res){
		application.app.controllers.admin.login.login(application, req, res);
	});
}