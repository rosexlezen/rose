const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    // Permissions
    if (!args[0]) return message.reply("please write your suggestion.");
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("I cannot execute this command! Please give me ``Manage Messages``");

    var suggestion = args.slice(0).join(" ");

    // Command

    var suggestEmbed = new discord.MessageEmbed()
    .setColor('#d105ff')
	.setDescription('Suggestion information:')
	.setThumbnail(message.author.avatarURL())
    .addFields(
        {name: `Suggested by:`, value: `${message.author}`},
        {name: `Suggestion:`, value: `${suggestion}`},
        )
	.setTimestamp()
    .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);
    
    var channel = message.member.guild.channels.cache.find(c => c.name === 'suggestions');
    if(!channel) return message.channel.send('``An Administrator has not setup a channel called suggestions yet.``');
    channel.send(suggestEmbed);

} 

module.exports.help = {
    name: "/suggest"
}