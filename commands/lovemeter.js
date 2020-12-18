const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

if (!args[0]) return message.reply("please provide the names you want love check.");
else if (!args[1]) return message.reply("please provide the names you want love check.");

    var result = Math.ceil(Math.random() * 100);
    message.channel.send(`${message.author}, **${args[0]}** and **${args[1]}** are ${result}% in love`);

}

module.exports.help = {
    name: "lovemeter"
}