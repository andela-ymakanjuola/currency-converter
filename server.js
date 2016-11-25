var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3333;
app.listen(port, function() {
  console.log('listening on port ' + port)
})

