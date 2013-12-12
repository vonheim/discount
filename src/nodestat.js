"use strict";

var MemoryStorage = require('./memorystorage.js'),
    List          = require('./widget.list.js'),
    app           = require('./express.js'),
    http          = require('http');


function NodeStat() {
    var self = this;

    app.get('/', function(req, res) {
        res.render('index', {nodestat:self, hostname: require('os').hostname()});
    });

    var server = http.createServer(app).listen(app.get('port'), function() {
        console.log("Nodestat running on http://localhost:"+ app.get('port') +"/");
    });
}

NodeStat.prototype = {
    widgets: [],
    stats: {
        "default": new MemoryStorage()
    },
    storage: {
        MemoryStorage: MemoryStorage
    },
    widget: {
        List: List
    },
    stat: function(name) {
        return this.stats[name || "default"];
    },
    setWidgets: function(widgets) {
        this.widgets = widgets;
    }
}


module.exports = new NodeStat();