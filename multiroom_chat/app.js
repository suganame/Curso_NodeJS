// Importar as configurações do servidor

var app = require('./config/server'); //Podemos ocultar a extensao

// Criar a porta de escuta

app.listen(80, function(){
	console.log('Servidor Online');
});