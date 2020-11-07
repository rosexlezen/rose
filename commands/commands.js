const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const embedCmds = new discord.MessageEmbed()
	.setColor('#d105ff')
	.setTitle('Help for the bot')
	.setURL('https://www.instagram.com/rose.hartje/')
	.setAuthor('Lezen#3283', 'https://cdn.discordapp.com/attachments/773879672676548609/773880038520127508/uhfi.jpg', 'https://www.instagram.com/rose.hartje/')
	.setDescription('Get more commands by typing /commands')
	.setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/773880508743680000/aiudha.jpg')
	.addFields(
		{ name: 'This message will automatically be deleted in 30 seconds!', value: 'These are all the commands:' },
        { name: '\u200B', value: '\u200B' },
        { name: '/help', value: '_Get help to use the bot!_', inline: true },
        { name: '/commands', value: '_Find all the commands you can use!_', inline: true },
		{ name: '/info', value: '_Find all the informatino about the bot!_', inline: true },
		{ name: '/suggest', value: '_Make a suggestion_', inline: true },
	)
	.addFields(
		{ name: '/ping', value: `_Get the bots' ping_`, inline: true },
		{ name: '/uptime', value: '_Get the time the bot has been up and running_', inline: true },
		{ name: '/dice', value: '_Throw a dice_' },
		{ name: '/iq (or /iqmeter)', value: `get your IQ.` },
		{ name: '/coin', value: `does a coinflip` },
		{ name: '/rps (rock, paper or scissors)', value: `play rock paper scissors with the bot.` },
	)
	.setImage('https://cdn.discordapp.com/attachments/773879672676548609/773880694296281098/images.jpg')
	.setTimestamp()
	.setFooter('creator: Lezen#3283', 'https://cdn.discordapp.com/attachments/773879672676548609/773880029859020820/awdaw.jpg');

    message.channel.send(embedCmds).then(d => d.delete({timeout: 30000}));
} 

module.exports.help = {
    name: "commands"
}