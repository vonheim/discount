var stat = require('./configured-discount.js');

stat.add("count-1", 2);
stat.add("count-2", 3);
stat.add("count-4", 3);
stat.add("total", 13);
stat.add("category-1", 4);
stat.add("category-2", 13);
stat.add("category-3", 8);


setInterval(function() {
  var key = "count-" + Math.floor(Math.random()*7);
  stat.add(key, 1);
}, 500);