"use strict";

var nodestat = require('../src/nodestat.js');

nodestat.widgets = [
    new nodestat.widget.BarChart({name:"Bar chart", match:/^count/}),
    new nodestat.widget.PieChart({name:"Pie chart", match:/^category/}),
    new nodestat.widget.List({name:"All"}),
];


module.exports = nodestat.stat();