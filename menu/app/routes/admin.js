module.exports = function(application){
	application.get('/admin/index', function(req,res){
		res.send('tela de login do admin');
	});
}