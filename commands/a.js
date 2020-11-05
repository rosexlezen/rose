const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

     var response = `**Message ID:** ${messageDeleted.id}\n**Message Author:** ${message.author}\n**Channel:** ${messageDeleted.channel}\n**Message:** ${content}`;
     var embedMsg = new discord.MessageEmbed()
     .setAuthor(`${messageDeleted.author.tag} ( ${messageDeleted.author.id} )`, `${messageDeleted.author.avatarURL({ size:4096 })}`)
     .setDescription(response)
    .setTimestamp()
     .setColor("#d105ff");

    const channel = client.channels.cache.find(c => c.name === 'logs');
     if(!channel) return;
     channel.send(embedMsg);

    }

module.exports.help = {
    name: "a"
}