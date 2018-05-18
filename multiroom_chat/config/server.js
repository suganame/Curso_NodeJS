// Importacao dos modulos adicionados
var express = require('express');
var consign = require('consign'); // Rotas
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// Iniciar o express

var app = express();

// Configurar o EJS e setar as variáveis 'view engine' e 'views' do express

app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configurar os middlewares

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressValidator());

// Efetua o auload do MVC para o objeto app

consign()
	.include('./app/routes')
	.include('./app/models')
	.include('./app/controllers')
	.into(app);

// Exportar o objeto app
module.exports = app;
