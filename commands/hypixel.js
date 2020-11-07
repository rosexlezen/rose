const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const hypixelEmbed = new discord.MessageEmbed()
	.setColor('#d105ff')
	.setTitle('Help for the bot')
	.setURL('https://www.instagram.com/rose.hartje/')
	.setAuthor('Lezen#3283', 'https://cdn.discordapp.com/attachments/773879672676548609/773880038520127508/uhfi.jpg', 'https://www.instagram.com/rose.hartje/')
	.setDescription('Get more commands by typing /commands')
	.setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/773880508743680000/aiudha.jpg')
	.addFields(
		{ name: 'To get a specific gamemode type it after the gamemode itself!', value: `Example: /hs Lezen Bedwars 3's` },
        { name: '\u200B', value: '\u200B' },
        { name: '/hs', value: '_Get general information about someone._', inline: true },

	)
	.addFields(
		{ name: 'nothing yet', value: `_a_`, inline: true },

	)
	.setImage('https://cdn.discordapp.com/attachments/773879672676548609/773880694296281098/images.jpg')
	.setTimestamp()
	.setFooter('creator: Lezen#3283', 'https://cdn.discordapp.com/attachments/773879672676548609/773880029859020820/awdaw.jpg');

    message.channel.send(hypixelEmbed);
} 

module.exports.help = {
    name: "hypixel"
}