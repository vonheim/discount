"use strict";


function MemoryStorage(items) {
    this.items = items || {};
}


MemoryStorage.prototype = {
    set: function(key, value) {
        this.items[key] = value;
    },
    add: function(key, value) {
        this.items[key] += value;
    },
    subset: function(regexp, cb) {
        var result = {};
        for(var key in this.items) {
            if( key.match(regexp) ) {
                result[key] = this.items[key];
            }
        }
        cb(null, new Set(result));
    },
    toHash: function(cb) {
        cb(null, this.items);
    },
};


module.exports = MemoryStorage;
