"use strict";
var _ = require('underscore');

function Set(items) {
    this.items = items || {};
}


Set.prototype = {
    set: function(key, value) {
        this.items[key] = value;
    },
    add: function(key, value) {
        if( !this.items[key] ) this.items[key] = 0;
        this.items[key] += value || 1;
    },
    get: function(key) {
        return this.items[key];
    },

    subset: function(regexp) {
        var result = {};
        for(var key in this.items) {
            if( key.match(regexp) ) {
                result[key] = this.items[key];
            }
        }
        return new Set(result);
    },
    toHash: function() {
        return this.items;
    },
    size: function() {
        var size = 0, key;
        for (key in this.items) size++;
        return size;
    },
    sortedKeys: function() {
        return _.keys(this.items).sort();
    },
    toString: function() {
        return "Set of "+this.size()+" items";
    }
};



module.exports = Set;
