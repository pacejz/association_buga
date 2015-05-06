

var express = require('express');

////////////////////
// l' application //
////////////////////

var app = express();
app.use(express.static(__dirname + '/public/'));


//==========================Les routes============================//
// /!\Warning, The interface route must always be the last one (because it takes care of everything that have not been already routed...) /!\


/////////
// api //
/////////

app.get('/api/articles', function(res, res){
	res.sendFile('data.json', {"root": __dirname + '/server'});
})





///////////////
// interface //
///////////////

app.use(function(req, res) {
  return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url)
})





//=======================DEMARRAGE du serveur==========================//

var address = '127.0.0.1',
	port = '1234',
	full = 'http://'+address+':'+port;

app.listen(port);
console.log('server running at : '+full)