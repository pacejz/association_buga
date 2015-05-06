
var fs      = require('fs');
var express = require('express');

////////////////////
// l' application //
////////////////////

var app = express();
app.use(express.static(__dirname + '/public/'));


//==========================Les routes============================//
// /!\ Attention, l'interface doit toujours etre la derniere route! /!\


/////////
// api //
/////////

app.get('/api/articles', function(res, res){
	// res.sendFile('data.json', {"root": __dirname + '/server'});
	
	var content,
		filepath = __dirname + '/server/data.json',
	//get the data
		content  = JSON.parse(fs.readFileSync(filepath,'utf8'));

	//random article from the articlesData array :)  
	//(just to be sure I can do something with the data...)
	var tmp = Math.floor((Math.random() * content.articlesData.length)/* + 1*/);

	content.articlesData = [content.articlesData[tmp]];

	//send 	
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(content));

})



///////////////
// interface //
///////////////

app.use(function(req, res) {

	return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url)

})



//=======================DEMARRAGE du serveur==========================//

var address = '127.0.0.1',
	port    = '1234',
	full    = 'http://'+address+':'+port;

app.listen(port);
console.log('server running at : '+full)