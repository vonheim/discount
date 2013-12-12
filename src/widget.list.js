"use strict";


var Widget = require('./widget.js'),
    util   = require('util');


function List(args) {
    this.args = args || {};
    this.type = 'list';
}



util.inherits(List, Widget);

module.exports = List;

