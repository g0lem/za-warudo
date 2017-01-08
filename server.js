var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 8000, function(){
  console.log("App is listening on http://localhost:%d", server.address().port);
});



var io = require('./index')(server);
io.on('connection', function(client){
console.log('connected');
  client.on('event', function(data){});
  client.on('disconnect', function(){});
});


app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');

});

app.get('*/scripts/:script_name', function(req, res){

	res.sendFile(__dirname + '/scripts/'+req.params.script_name);

});