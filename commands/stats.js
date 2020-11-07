const discord = require("discord.js");
let fetch = require('node-fetch'); 

module.exports.run = async(client, message, args) => {

    // Getting the API
    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then( ({ record }) => {

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
        message.channel.send(statsEmbed).then(async msg => {

    //
    //
    // SkyWars
    //
    //

    var emoji = await reactionMessage(msg, message.author, ["⏪", "⏩"]);

    if (emoji === "⏪") {
        message.reply("Can't go back yet.")
    } else if (emoji === "⏩") {
        message.reply("Can't go forward yet.")
    }
}
    //
    //
    // BedWars
    //
    //

    // var emoji = await reactionMessage(msg, message.author, ["⏪", "⏩"]);

    // if (emoji === "⏪") {
    //     message.reply("Can't go back yet.")
    // } else if (emoji === "⏩") {
    //     message.reply("Can't go forward yet.")
    // }

})      
    .catch(err => console.log(err));
    }

module.exports.help = {
    name: "hs",
}