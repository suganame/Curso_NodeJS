module.exports.dashboard = function(application, req, res){
	res.render('admin/dashboard');
};

module.exports.funcionario = function(application, req, res, page, countPage){
	res.render('admin/funcionario', {"current" : page, "total" : countPage});
}

// module.exports.funcionarioGetAll = function(application, req, res, page, countPage){
// 	res.render('admin/funcionario', {"current" : page, "total" : countPage});
// }