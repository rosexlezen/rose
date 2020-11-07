const discord = require("discord.js");
let fetch = require('node-fetch'); 

module.exports.run = async(client, message, args) => {

    // Getting the API
    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then(( { record } ) => {

        if (!args[1]) {

        //
        //
        // General Stats
        //
        //


        // Embed
        var statsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
	    .setDescription('Statistics information:')
        //.setThumbnail("https://cdn.discordapp.com/attachments/773879672676548609/774542590925733898/2020-11-04_14.19.15.png?size=2048")
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},
        {name: `UUID:`, value: `:bust_in_silhouette: UUID: ${record.uuid}`},
        {name: `Alts:`, value: `:busts_in_silhouette: Known Alts: ${record.knownAliases}`},
        {name: `Network Level:`, value: `:sparkles: Network Experience: ${record.networkExp}`},
        {name: `Achievement:`, value: `:trophy: Achievement Points: ${record.achievementPoints}`},
        {name: `Karma:`, value: `:fleur_de_lis: Karma: ${record.karma}`},
        //{name: `SkyWars:`, value: `:sparkles: Wins: ${record.stats.SkyWars.wins}`},
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);

        // Sending stats
        return message.channel.send(statsEmbed);
    }

  
        //
        //
        // Skywars Stats
        // /hs name (0) gamemode (1) mode (2)
        // 

        if(args[1] == "Skywars" || args[1] == "sw") {

        // Embed
        var skywarsEmbed = new discord.MessageEmbed()
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
        return message.channel.send(skywarsEmbed);
    } 

})
        
    .catch(err => console.log(err));
    }

module.exports.help = {
    name: "hs",
}