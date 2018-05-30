module.exports.dashboard = function(application, req, res){
	res.render('admin/dashboard');
};

module.exports.cadastroAdministrador = function(application, req, res){
	res.render('admin/cadastro-usuario', {"tipoUsuario": 0});
};

module.exports.cadastroFuncionario = function(application, req, res){
	res.render('admin/cadastro-usuario', {"tipoUsuario": 1});
}

module.exports.cadastroUsuario = function(application, req, res){
	res.render('admin/cadastro-usuario', {"tipoUsuario": 2});
}