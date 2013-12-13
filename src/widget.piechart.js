"use strict";


var Widget = require('./widget.js'),
    util   = require('util');


function PieChart(args) {
    args = args || {};
    this.name = args.name;
    this.type = 'piechart';
}


util.inherits(PieChart, Widget);

module.exports = PieChart;

