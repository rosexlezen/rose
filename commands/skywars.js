const discord = require("discord.js");
let fetch = require('node-fetch'); 

module.exports.run = async(client, message, args) => {

    // Getting the API
    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then(( { record } ) => {

        var KDR = record.stats.skywars.wins / record.stats.skywars.losses;

        if(args[1] == "Skywars" || args[1] == "sw") {

        // Embed
        var statsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
	    .setDescription('Statistics information:')
        //.setThumbnail("https://cdn.discordapp.com/attachments/773879672676548609/774542590925733898/2020-11-04_14.19.15.png?size=2048")
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},

        {name: `Games:`, value: `**Games Played:** ${record.stats.skywars.games_played_skywars}`},
        {name: `Money:`, value: `**Coins:** ${record.stats.skywars.coins}`},
        {name: `Winstreak:`, value: `**Current Winstreak:** ${record.stats.skywars.win_streak}`},
        {name: `Wins:`, value: `**Wins:** ${record.stats.skywars.wins}`},
        {name: `KDR:`, value: `**KDR:** ${KDR}`},
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);

        // Sending Embed
        return message.channel.send(statsEmbed);


    } else if (args[2]) {
        message.channel.send(args[2]);
    } else if (args[2] == "duo") {
        message.channel.send("duo works!");
    }

        })
    .catch(err => console.log(err));
    }


module.exports.help = {
    name: "hs",
}