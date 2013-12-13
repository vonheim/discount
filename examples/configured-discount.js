"use strict";

var discount = require('../src/discount.js');

discount.widgets = [
    new discount.widget.BarChart({name:"Bar chart", match:/^count/}),
    new discount.widget.PieChart({name:"Pie chart", match:/^category/}),
    new discount.widget.List({name:"All"}),
];


module.exports = discount.stat();