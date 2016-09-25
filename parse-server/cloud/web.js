var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.mutnam.com/product/list.html?cate_no=264";

request(url, function(error, response, body) {
  if (error) throw error;

  var $ = cheerio.load(body);

  var postElements = $("li.xans-record-");
  postElements.each(function() {
    var itemName = $(this).find("div.description strong a").text();
    console.log(itemName);
  });
});
