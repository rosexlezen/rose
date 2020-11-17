const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const embedHelp = new discord.MessageEmbed()
	.setColor('#d105ff')
	.setTitle('Help for the bot')
	.setURL('https://www.youtube.com/channel/UCZ9ScDckAO4oG8RgGAR6RLg')
	.setAuthor('esmee#1413', 'https://cdn.discordapp.com/attachments/773879672676548609/773880038520127508/uhfi.jpg', 'https://www.esmee.club/')
	.setDescription('Get more commands by typing /commands')
	.setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/773880508743680000/aiudha.jpg')
	.addFields(
		{ name: 'This message will automatically be deleted in 30 seconds!', value: 'These are all the commands:' },
		{ name: '\u200B', value: '\u200B' },
        { name: '/commands', value: '_Find all the commands you can use!_', inline: true },
	)
	.addFields(
		{ name: '/info', value: '_Find information about the bot!_', inline: true },
        { name: '/uptime', value: '_Get the time the bot has been up and running_', inline: true },
	)
	.setImage('https://cdn.discordapp.com/attachments/773879672676548609/773880694296281098/images.jpg')
	.setTimestamp()
	.setFooter('creator: esmee#1413', 'https://cdn.discordapp.com/attachments/773879672676548609/773880029859020820/awdaw.jpg');

    message.channel.send(embedHelp).then(d => d.delete({timeout: 30000}));
} 

module.exports.help = {
    name: "help"
}