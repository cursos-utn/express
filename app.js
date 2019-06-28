var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Express funciona bien');
})

app.listen(80, function() {
    console.log('App escuchando en puerto 80');
})