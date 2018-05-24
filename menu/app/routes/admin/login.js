module.exports = function(application){
	application.get('', function(req, res){
		application.app.controllers.admin.login.login(application, req, res);
	});
}