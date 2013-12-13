"use strict";


var Widget = require('./widget.js'),
    _      = require('underscore'),
    util   = require('util');


function List(args) {
    _.defaults(this, {type: 'list'}, args||{});
}



util.inherits(List, Widget);

module.exports = List;

