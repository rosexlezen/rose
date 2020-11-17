const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

if (!args[0]) return message.reply("from how much do you want to get a random number? (Example: /randomnumber 0 10)");
if (!args[1]) return message.reply("until how much do you want to get a random number? (Example: /randomnumber 0 10)");

    min = args[0]
    max = args[1]

    if (min > max) return message.reply(`please use /randomnumber (min) (max)`);

    let result = Math.ceil(Math.random()) * (max - min) + min;

    message.channel.send(result);

}

module.exports.help = {
    name: "randomnumber"
}