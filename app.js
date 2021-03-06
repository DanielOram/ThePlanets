var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

//routes
var index = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use( express.static(__dirname + '/client/dist' ) );
app.set('views', __dirname+'/client/dist');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', index);

var listener = server.listen(process.env.PORT || 5000, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 5000
});

//end of file