var express = require('express'),
    app = express(),
    PORT = 3000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/one', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/two', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/three', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);

console.log('Started server on port', PORT);
