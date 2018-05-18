// Importar as configurações do servidor

var app = require('./config/server'); //Podemos ocultar a extensao

// Criar a porta de escuta

var server = app.listen(80, function(){
	console.log('Servidor Online');
});

var io = require('socket.io').listen(server);

app.set('io', io);

// Cria a conexão por websocket

io.on('connection', function(socket){
	console.log('Usuario conectou');

	socket.on('disconnect', function(){
		console.log('Usuario desconectou');
	});

	socket.on('msgParaServidor', function(data){
		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem : data.mensagem}
		);

		socket.broadcast.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem : data.mensagem}
		);

		// Atualiza a relação de participantes

		if( parseInt(data.apelido_atualizado_nos_clientes) == 0 ){

			console.log(data);

			socket.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);

			socket.broadcast.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);
		}
	});
});