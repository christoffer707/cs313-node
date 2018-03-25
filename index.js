

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');
var conString = "postgres://postgres:C00perton@localhost:5433/postgres";

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (request, response) {
    response.render('pages/index');
	

});
  app.get('/postal', function (request, response) {
	response.render('pages/postalCal')

});

app.post('/getRate', function (req, res){	
	var type = req.body.type;
	var weights = req.body.weights;
	res.render('pages/getRate', {weights:weights, type:type});
});


app.listen(app.get('port'), function(req, res) {
console.log('Node app is running on port', app.get('port'));
});

/*app.get('/final', function(req, res) {
	var client = new pg.Client(conString);
	client.connect();
  client.query('SELECT user_id, post_id, post_date, post_content, post_title, post_category FROM blog.post', function(err, results) {
	
	console.log(results);
    if (err) {
      throw err;
    }
	response.render('pages/final', {results:results.row});
  });
});*/

app.get('/final', (req, res)=> {
 pg.connect(conString, function(err, client, done) {
 client.query('SELECT user_id, post_id, post_date, post_content, post_title, post_category FROM blog.post', function(err, results) {   
 
 done();
 if (err)        {
 console.error(err); res.send("Error " + err); }
 else{ 
 console.log("Found result: " + JSON.stringify(results.rows));          
 //console.log("Data result: " + result.rows);           
 res.render('pages/final', {results: results.rows});          }
}); 
});
});



