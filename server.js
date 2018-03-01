var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var videos = require('./routes/videos');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/api', videos);

app.use('*',function (req, res) {
    res.redirect('/');
});

app.listen(2000, function(){
    console.log("Server running on port 2000 ");
})