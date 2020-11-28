const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var sentences = [
        "monkey see, monkey do",
        "joshua is the greatest player of all time",
        "i ate food now i am tired",
        "im exhausted all day long"
    ];
    var type = sentences[Math.floor(Math.random() * sentences.length)];

    message.channel.send("Typeracer will start in 1-10 seconds, be ready!").then(d => d.delete({timeout: 5000}));

    function awaitingMessage() {
        var min = 5,
          max = 10;

        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        message.channel.send(`Wait for ${rand} seconds! \n${type}`);
        setTimeout(awaitingMessage, rand * 1000);
      }

      return(awaitingMessage());
      
} 

module.exports.help = {
    name: "typeracer"
}