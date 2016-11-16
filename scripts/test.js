var tuan;
tuan = ["http://www.yeunhacvang.com/images/article/2013/7/12-7-2013/x42_1.jpg.pagespeed.ic.dcmFU5scVG.jpg"];

module.exports = function(bot) {
 bot.hear(/Kamusta!/, function(res) {
   return res.send("Mabute!");
 });
};



  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return bot.hear(/Maganda Ka?/i, function(msg) {
    return msg.send(msg.random(tuan));
  });
};
