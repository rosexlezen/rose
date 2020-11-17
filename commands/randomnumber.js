const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

if (!args[0]) return message.reply("From how much do you want to get a random number? (Example: /randomnumber 0 10)");
if (!args[1]) return message.reply("Until how much do you want to get a random number? (Example: /randomnumber 0 10)");

    var result = Math.floor(Math.random() * (args[0], args[1]));

    message.channel.send(result);

}

module.exports.help = {
    name: "randomnumber"
}