const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const user = message.mentions.users.first() || message.author;
    let pfp = user.avatarURL();
    
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#ffd4fa")
        .setTitle(`**${user}**'s Profile Picture:`)
        .setImage(pfp)
        .setThumbnail(message.author.avatarURL())

    message.channel.send(avatarEmbed);
} 

module.exports.help = {
    name: "av"
}