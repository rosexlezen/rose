const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!args[0]) return message.reply("please provide a username.");
    
    const user = message.mentions.users.first() || message.author;

    const avatarEmbed = new Discord.RichEmbed()
        .setColor("#ffd4fa")
        .setAuthor(user.username)
        .setImage(user.avatarURL);

    message.channel.send(avatarEmbed);

} 

module.exports.help = {
    name: "av"
}