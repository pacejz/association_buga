
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

app.get('/api/articles', function(req, res){
	// res.sendFile('data.json', {"root": __dirname + '/server'});
	
	var content, contentSend, index, tmp, initLength,
		filepath = __dirname + '/server/data.json',
	//get the data
		content  = JSON.parse(fs.readFileSync(filepath,'utf8'));
		contentSend = {"articlesData": []};
	//random article from the articlesData array :)  
	//(just to be sure I can do something with the data...)

	initLength = content.articlesData.length;
	for (var index = 0; index <  initLength; index = index + 1) {
			tmp = Math.floor((Math.random() * content.articlesData.length));
			console.log(contentSend.articlesData.length);
			contentSend.articlesData[index] = content.articlesData[tmp];
			content.articlesData.splice(tmp,1);
	};

	// content.articlesData = [content.articlesData[tmp]];

	res.json(contentSend);
})

app.get('api/images', function(req, res){
	var content, index, data
		filepath = __dirname + '/server/data.json',
		content  = JSON.parse(fs.readFileSync(filepath,'utf8'));
		// for(index = 0; index < content.articlesData.length; index = index + 1) {
		// 	data = content.articlesData[index];

		// }

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