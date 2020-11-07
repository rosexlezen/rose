const discord = require("discord.js");
let fetch = require('node-fetch'); 

module.exports.run = async(client, message, args) => {

    // Getting the API
    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then(( { record } ) => {

        // Embed
        var statsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
	    .setDescription('Statistics information:')
	    .setImage("https://cdn.discordapp.com/attachments/773879672676548609/774542590925733898/2020-11-04_14.19.15.png?size=2048")
        .setThumbnail("https://cdn.discordapp.com/attachments/773879672676548609/774542590925733898/2020-11-04_14.19.15.png?size=2048")
        .addFields(
        {name: `Player:`, value: `${record.displayname}`},
        {name: `Statistics:`, value: `:sparkles: Network Experience: ${record.networkExp}`},
        {name: `Alts:`, value: `:busts_in_silhouette: Known Alts: ${record.knownAliases}`},
        {name: `SkyWars:`, value: `:sparkles: Wins: ${record.stats.SkyWars.wins} (Should be 34)`},
        {name: `Skywars:`, value: `:sparkles: Kills: ${record.stats.SkyWars.kills}`},
        {name: `Skywars:`, value: `:sparkles: Winstreak: ${record.stats.SkyWars.win_streak}`},
        {name: `Bedwars:`, value: `:sparkles: Winstreak: ${record.stats.Bedwars.eight_two_voidless_wins_bedwars}`},
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);

        // Sending stats
        return message.channel.send(statsEmbed).then(d => d.delete({timeout: 15000}));
        })
    .catch(err => console.log(err));
    }

module.exports.help = {
    name: "stats",
}