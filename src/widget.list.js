"use strict";


var Widget = require('./widget.js'),
    util   = require('util');


function List(args) {
    args = args || {};
    this.name = args.name;
    this.type = 'list';
}



util.inherits(List, Widget);

module.exports = List;

