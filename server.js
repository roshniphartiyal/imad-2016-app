var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'rachna.html'));
});

app.get('/articleone', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});

app.get('/articletwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});


app.get('/roshni', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshni.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
  counter = counter +1;
  res.send(counter.toString());
});



app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
