const discord = require("discord.js");
let fetch = require('node-fetch'); 


module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then( ({ record }) => {

        //
        //
        // General Embed
        //
        //

        var GeneralEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
	    .setDescription('Statistics information:')
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},
        {name: `UUID:`, value: `:bust_in_silhouette: UUID: ${record.uuid}`},
        {name: `Alts:`, value: `:busts_in_silhouette: Known Alts: ${record.knownAliases}`},
        {name: `Network Level:`, value: `:sparkles: Network Experience: ${record.networkExp}`},
        {name: `Achievement:`, value: `:trophy: Achievement Points: ${record.achievementPoints}`},
        {name: `Karma:`, value: `:fleur_de_lis: Karma: ${record.karma}`},
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);

        //
        //
        // Skywars Embed
        //
        //

        var SkyWarsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
	    .setDescription('Statistics information:')
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},
        {name: `SkyWars:`, value: `:sparkles: Wins: ${record.stats.SkyWars.wins}`},
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);

        //
        //
        // Bedwars Embed
        //
        //

        var BedWarsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
	    .setDescription('Statistics information:')
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},
        {name: `Testing:`, value: `Bedwars`},
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);


        //
        //
        // Sending MSGS
        //
        //

    message.channel.send(GeneralEmbed).then(async msg => {
    var emoji = await reactionMessage(msg, message.author, 300, ["⏪", ":bed:"]);
    
    if (emoji === "⏪") {
        message.channel.send(SkyWarsEmbed).then(async msg => {
            var emoji = await reactionMessage(msg, message.author, 300, ["⏪", ":bed:"]);
        });
    }

    if (emoji === ":bed:") {
        message.channel.send(BedWarsEmbed).then(async msg => {
            var emoji = await reactionMessage(msg, message.author, 300, ["⏪", ":bed:"]);
        });
    }
});


// 
//
// Reaction Message
//
//

async function reactionMessage(message, author, time, reactions) {


    time *= 1000;

    for(const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, {max: 1, time: time}).then(collected => collected.first() && collected.first().emoji.name);

}
    });

}
module.exports.help = {
    name: "kev"
}