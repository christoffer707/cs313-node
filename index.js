var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (request, response) {
	response.render('pages/index')

});
  app.get('/postal', function (request, response) {
	response.render('pages/postalCal')

});

app.post('/getRate', function (req, res){	
	var type = req.body.type;
	var weights = req.body.weights;
	res.render('pages/getRate', {weights:weights, type:type});
});

app.listen(app.get('port'), function() {
console.log('Node app is running on port', app.get('port'));
});




