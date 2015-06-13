
var fs      = require('fs');
var express = require('express');

////////////////////
// l' application //
////////////////////

var app = express();
app.use(express.static(__dirname + '/public/'));
app.use('/img',express.static(__dirname + '/img/'));


//==========================Les routes============================//
// /!\ Attention, l'interface doit toujours etre la derniere route! /!\


/////////
// api //
/////////


// app.get('/api/articles', function(req, res){
// 	// res.sendFile('data.json', {"root": __dirname + '/server'});
	
// 	var content, contentSend, index, tmp, initLength,
// 		filepath = __dirname + '/server/data.json',
// 		content  = JSON.parse(fs.readFileSync(filepath,'utf8')), //get the data
// 		contentSend = {"articlesData": []};

// 	initLength = content.articlesData.length;

// 	for (var index = 0; index <  initLength; index = index + 1) {
// 			tmp = Math.floor((Math.random() * content.articlesData.length));
// 			contentSend.articlesData[index] = content.articlesData[tmp];
// 			content.articlesData.splice(tmp,1);
// 	};

// 	res.json(contentSend);
// });


//get all articles
app.get('/api/articles', function(req, res){
	
	var filepath = __dirname + '/server/data.json',
		content  = JSON.parse(fs.readFileSync(filepath,'utf8')), //get the data
		contentSend = content;

	res.json(contentSend);
});

//get images
app.get('/api/images', function(req, res){
	
	var filepath = __dirname + '/server/images.json',
		content  = JSON.parse(fs.readFileSync(filepath,'utf8')), //get the data
		contentSend = content;
	res.json(contentSend);
});

// articles per pages ... 
app.get('/api/articles/:page', function(req, res){
	
	var perPages = 2,
		filepath = __dirname + '/server/data.json',
		content  = JSON.parse(fs.readFileSync(filepath,'utf8')), //get the data
		page = req.params.page*perPages,
		contentSend = {"articlesData": content.articlesData.splice(page, perPages)};

	res.json(contentSend);
});




// app.get('api/images', function(req, res){
// 	var content, index, data
// 		filepath = __dirname + '/server/data.json',
// 		content  = JSON.parse(fs.readFileSync(filepath,'utf8'));
// })







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