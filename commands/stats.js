const discord = require("discord.js");
let fetch = require('node-fetch'); 

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply('please provide a username.');

    var statsEmbed = new discord.MessageEmbed()
    .setColor('#d105ff')
	.setDescription('Statistics information:')
	.setThumbnail(`https://cdn.discordapp.com/attachments/773879672676548609/774244292713512990/AATXAJwDxeYJZqn6lKdo1rMjgn1Jv9bGy4GPzQDlFyIawAs900-c-k-c0x00ffffff-no-rj.png`)
    .addFields(
        {name: `Player:`, value: `${record.displayname}`},
        {name: `Statistics:`, value: `EXP: ${record.networkExp}`},
        )
	.setTimestamp()
    .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);

    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then(( { record } ) => {
        return message.channel.send(statsEmbed).then(d => d.delete({timeout: 15000}));
        //return message.channel.send(`${record.displayname} has ${record.networkExp} Network EXP!`).then(d => d.delete({timeout: 15000}));
        })
    .catch(err => console.log(err));
    }

module.exports.help = {
    name: "stats",
}