module.exports = function(bot) {
 bot.hear(/Kamusta!/, function(res) {
   return res.send("Hi there!");
 });
};
