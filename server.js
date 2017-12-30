'use strict';

var express = require('express');
const path = require('path');
var quotesRepository = require('./quotesRepository');
var app = express();
var port = process.env.PORT || 3000;

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
})
app.get('/v2/quotes/:num?', function (req, res) {
	res.send(quotesRepository.getRandom(req.params.num || 1));
});

app.listen(port, function () {
	console.log('Server running on port', port);
})
