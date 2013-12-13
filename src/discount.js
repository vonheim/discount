"use strict";
var _ = require('underscore');

var List     = require('./widget.list.js'),
    PieChart = require('./widget.piechart.js'),
    BarChart = require('./widget.barchart.js'),
    Set      = require('./set.js'),
    app      = require('./express.js'),
    http     = require('http');


function Discount() {
    var self = this;

    app.get('/', function(req, res) {
        res.render('index', {discount: self, "_": _ });
    });

    var server = http.createServer(app).listen(app.get('port'), function() {
        console.log("Discount running on http://localhost:"+ app.get('port') +"/");
    });
}

Discount.prototype = {
    widget: {
        "List": List,
        "PieChart": PieChart,
        "BarChart": BarChart
    },

    widgets: [new List({name:"All keys"})],
    stats: {
        "default": new Set()
    },

    stat: function(name) {
        return this.stats[name || "default"];
    }
}


module.exports = new Discount();