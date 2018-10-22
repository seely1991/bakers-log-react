// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mongoDb = require('mongodb');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// http://expressjs.com/en/starter/basic-routing.html
//app.set('view engine', 'pug');
//app.set("views", path.join(__dirname, "views"));
/*
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
*/
// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

var Schema = mongoose.Schema;
var listSchema = new Schema({
  name: String,
  list: []
})

var list = mongoose.model('list', listSchema);

app.post('/api/save', (req, res, next) => {
  list.find({name: req.body.listName}, (err, data) => {
    if (!data.length) {
      next();
    }else{
      res.send('list name taken');
    }
  })
}, (req, res) => {
  var newList = new list({
    name: req.body.listName,
    list: req.body.list
  })
  newList.save();
  res.send('saved successfully');
})

app.get('/api/load', (req, res) => {
  list.findOne({name: req.query.listName}, (err, data) => {
    if (!data) {
      res.send("list name not found");
    }else{
      res.json(data)
    }
  })
});
