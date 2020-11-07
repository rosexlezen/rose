const discord = require("discord.js");
let fetch = require('node-fetch'); 


module.exports.run = async(client, message, args) => {

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
        var myEmbed = new discord.MessageEmbed()
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

    message.channel.send(myEmbed).then(async msg => {
    var emoji = await reactionMessage(msg, message.author, 300, ["⏪", "⏩"]);

    //
    // Question 1
    //

    if (emoji === "⏪") {
        message.channel.send(`**―――――――――――――――**\nHow do you get the biggest text without CSS in HTML?\n**―――――――――――――――**`);
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == 'h1' || collected.first().content.toLowerCase() == 'h' || collected.first().content.toLowerCase() == '1') {
                message.reply(`your answer is correct!`);

            } else {
                message.reply(`your answer is incorrect!`);
            }

        });
        
    }
    
    //
    // Question 9
    //

    if (emoji === "⏩") {
        message.channel.send(`**―――――――――――――――**\nWhat percentage of an egg's weight is shell?\n**―――――――――――――――**`);
        message.channel.send("Choose out of: ``8%`` ``12%`` ``32%`` or ``52%``");
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == '12' || collected.first().content.toLowerCase() == '12%') {
                message.reply(`your answer is correct!`);
            } else {
                message.reply(`your answer is incorrect!`);
            }
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