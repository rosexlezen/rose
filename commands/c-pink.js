const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you cannot use this command!");
    if ((message.guild.channels.cache.find(c => c.name.toLowerCase() !== "reactionroles"))) return message.reply('```Create a channel called: "reactionroles"```');

    // guild.roles.create({ data: { name: 'test', color: ['#f9d4fa'] } });
    // guild.roles.create({ data: { name: 'test1', color: ['#f599f7'] } });

    const picture = new discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/770574971818344448/789994438654558228/tenor_1.gif')

    const ColorPink = new discord.MessageEmbed()
    .setColor(color)
    .setTitle(color)
    .setURL("https://www.google.com/search?q=hex+color")

    message.channel.send(picture)
    message.channel.send(ColorPink);
    
} 

module.exports.help = {
    name: "/c-pink",
}