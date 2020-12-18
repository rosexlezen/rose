const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply(`Please provide a # color (example: #000000).`);

    var color = args[0]

    const hex = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(color)

    message.channel.send(`https://www.google.com/search?q=hex+color\n${hex}`);

}

module.exports.help = {
    name: "hex"
}