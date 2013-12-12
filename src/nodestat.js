"use strict";
var _ = require('underscore');

var List = require('./widget.list.js'),
    Set  = require('./set.js'),
    app  = require('./express.js'),
    http = require('http');


function NodeStat() {
    var self = this;

    app.get('/', function(req, res) {
        res.render('index', {nodestat: self, "_": _ });
    });

    var server = http.createServer(app).listen(app.get('port'), function() {
        console.log("Nodestat running on http://localhost:"+ app.get('port') +"/");
    });
}

NodeStat.prototype = {
    widget: {
        List: List
    },

    widgets: [new List({name:"All keys"})],
    stats: {
        "default": new Set()
    },

    stat: function(name) {
        return this.stats[name || "default"];
    }
}


module.exports = new NodeStat();