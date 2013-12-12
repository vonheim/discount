function Set(items) {
    this.items = items || {};
}


Set.prototype = {
    subset: function(regexp) {
        var result = {};
        for(var key in this.items) {
            
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
    toString: function() {
        return 'TODO';
    }
};



module.exports = Set;
