const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const user = message.mentions.users.first();
    let pfp = user.avatarURL();

    if(!args[0]) {
        const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#ffd4fa")
        .setTitle(`**${user.username}**'s Profile Picture:`)
        .setImage(message.author.avatarURL());

        message.channel.send(avatarEmbed);
    }

    else {
        
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#ffd4fa")
        .setTitle(`**${user.username}**'s Profile Picture:`)
        .setImage(pfp);

    message.channel.send(avatarEmbed);
    }
} 

module.exports.help = {
    name: "av"
}