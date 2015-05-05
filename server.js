

var express = require('express');

////////////////////
// l' application //
////////////////////

var app = express();
app.use(express.static(__dirname + '/public/'));


//==========================Les routes============================//


///////////////
// interface //
///////////////

// app.get('/', function(res, res){
// 	res.sendFile('index.html');
// })

// app.all('/*', function(req, res) { 
// 	res.sendFile('index.html', {"root": __dirname + '/public'}); 
// });

app.use(function(req, res) {
  return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url)
})




/////////
// api //
/////////

app.get('/api/articles', function(res, res){
	res.sendFile('data.json', {"root": __dirname + '/server'});
})








//=======================DEMARRAGE du serveur==========================//

var address = '127.0.0.1',
	port = '1234',
	full = 'http://'+address+':'+port;

app.listen(port);
console.log('server running at : '+full)