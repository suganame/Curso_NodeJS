var express = require('express');
var consign = require('consign');
var expressPartials = require('express-partials');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static( './app/public'));

app.use('/jquery', express.static('./node_modules/jquery/dist/'));
app.use(expressPartials());

consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;