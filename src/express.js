"use strict";

var express = require('express'),
    path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 60346);
    app.set('views', __dirname + './../views');
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, './../public')));
});


module.exports = app;