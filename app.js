var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var app = express();

// View Engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var server = app.listen(3000, function(){
	var hots = server.address().address;
	var port = server.address().port;
	console.log('Server listening at port 3000');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;