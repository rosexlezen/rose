const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

    var infoEmbed = new discord.MessageEmbed()
    .setColor('#d105ff')
	.setTitle('Information about the bot')
	.setURL('https://www.youtube.com/channel/UCZ9ScDckAO4oG8RgGAR6RLg')
	.setAuthor('esmee#1413', 'https://cdn.discordapp.com/attachments/773879672676548609/773880038520127508/uhfi.jpg', 'https://www.esmee.club/')
	.setDescription('Get more information by typing /help')
	.setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/773880508743680000/aiudha.jpg')
    .addFields(
        {name: `Bot Name:`, value: `${client.user.username}`},
        {name: `Created At:`, value: `${client.user.createdAt}`},
        {name: `Uptime:`, value: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}
        )
	.setTimestamp()
	.setFooter('creator: esmee#1413', 'https://cdn.discordapp.com/attachments/773879672676548609/773880029859020820/awdaw.jpg');

    message.channel.send(infoEmbed).then(d => d.delete({timeout: 30000}));
}

module.exports.help = {
    name: "/info"
}