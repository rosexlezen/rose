const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply(`Please provide a # color (example: #000000).`);
    if(!isNaN) return message.reply(`Please provide a # color (example: #000000)`);

    var color = args[0]

    const hex = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(color)

    message.channel.send(hex);

}

module.exports.help = {
    name: "hex"
}