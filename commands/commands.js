const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const embedCmds = new discord.MessageEmbed()
	.setColor('#d105ff')
	.setTitle('Help for the bot')
	.setURL('https://www.youtube.com/channel/UCZ9ScDckAO4oG8RgGAR6RLg')
	.setAuthor('esmee#1413', 'https://cdn.discordapp.com/attachments/773879672676548609/773880038520127508/uhfi.jpg', 'https://www.esmee.club/')
	.setDescription('Get more commands by typing /commands')
	.setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/773880508743680000/aiudha.jpg')
	.addFields(
		{ name: 'This message will automatically be deleted in 30 seconds!', value: 'These are all the commands:' },
        { name: '\u200B', value: '\u200B' },
        { name: '/help', value: '_Get help to use the bot!_', inline: true },
		{ name: '/info', value: '_Find all the informatino about the bot!_', inline: true },
		{ name: '/suggest', value: '_Make a suggestion_', inline: true },
	)
	.addFields(
		{ name: '/ping', value: `_Get the bots' ping_`, inline: true },
		{ name: '/hs', value: `_Looks for someone's **Hypixel stats**._`, inline: true },
		{ name: '/dice', value: '_Throw a dice_', inline: true },
		{ name: '/iq (or /iqmeter)', value: `_get your IQ_.`,  inline: true },
		{ name: '/coin', value: `_does a coinflip_`,  inline: true },
		{ name: '/rps (rock, paper or scissors)', value: `_play rock paper scissors with the bot._`,  inline: true },
		{ name: '/kiss', value: `_kiss someone._`,  inline: true },
		{ name: '/hug', value: `_hug someone._`,  inline: true },
		{ name: '/lovemeter (or /love)', value: `_Look how much 2 people are in love with each other._`,  inline: true },
	)
	.setImage('https://cdn.discordapp.com/attachments/773879672676548609/773880694296281098/images.jpg')
	.setTimestamp()
	.setFooter('creator: esmee#1413', 'https://cdn.discordapp.com/attachments/773879672676548609/773880029859020820/awdaw.jpg');

    message.channel.send(embedCmds).then(d => d.delete({timeout: 30000}));
} 

module.exports.help = {
    name: "commands"
}