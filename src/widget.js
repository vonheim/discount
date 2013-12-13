"use strict";

var _ = require('underscore');

var ejs = require('ejs'),
    fs  = require('fs');


function Widget() {
}

Widget.prototype = {
    render: function(args) {
        var template = fs.readFileSync(__dirname + '/../widgets/'+ this.type +'.ejs', 'utf8');
        return ejs.render(template, args);
    },
    process: function(set, widgetIndex) {
        var relevant = set.subset(this.match || '.*');
        return this.render({set: relevant, widgetIndex: widgetIndex, "_": _ });
    }
}

module.exports = Widget;
