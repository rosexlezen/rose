const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
    const user = message.mentions.users.first() || message.author;

    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#ffd4fa")
        .setAuthor(user.username)
        .setImage(user.avatarURL);

    message.channel.send(avatarEmbed);

} 

module.exports.help = {
    name: "av"
}