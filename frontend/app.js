var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	request = require('request');

app.use(express.static(__dirname + '/public'))
.use(express.json())
.use(express.urlencoded());

server.listen(8080);
console.log('SERVER UP AND RUNNING');

app.get('/list', function (req, response, next) {
	request({
		url: 'http://192.168.0.19:8080/list',
		method: 'get',
		json: true
	}, function(err, res, data) {
		response.json(data);
	});
});

app.post('/start', function (req, res, next) {
	request({
		url: 'http://192.168.0.19:8080/start',
		method: 'post',
		json: req.body
	}, function(error, response, data) {
		res.json(true);
	});
});

app.post('/stop', function (req, res, next) {
	request({
		url: 'http://192.168.0.19:8080/stop',
		method: 'post',
		json: req.body
	}, function(error, response, data) {
		res.json(true);
	});
});