const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
    const user = message.mentions.users.first() || message.author;

    var pfp = user.avatarURL();

    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#ffd4fa")
        .setTitle(`**${user.username}**'s Profile Picture:`)
        .setImage(pfp);

    message.channel.send(avatarEmbed);

} 

module.exports.help = {
    name: "av"
}