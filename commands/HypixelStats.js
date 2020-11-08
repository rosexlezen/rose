const discord = require("discord.js");
let fetch = require('node-fetch'); 


module.exports.run = async(client, message, args) => {

    if(args[0] === undefined) return message.channel.send("``Player not found!``");
    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then( ({ record }) => { 

        //
        //
        // General Embed
        //
        //

        var networkLevel = (Math.sqrt(record.networkEXP + 15312.5) - 125/Math.sqrt(2))/(25*Math.sqrt(2));

        var GeneralEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
        .setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/774244292713512990/AATXAJwDxeYJZqn6lKdo1rMjgn1Jv9bGy4GPzQDlFyIawAs900-c-k-c0x00ffffff-no-rj.png')
	    .setDescription("⏩ = SkyWars")
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},
        {name: `UUID:`, value: `:bust_in_silhouette: UUID: ${record.uuid}`},
        {name: `Alts:`, value: `:busts_in_silhouette: Known Alts: ${record.knownAliases} https://nl.namemc.com/profile/${args[0]}`},
        {name: `Network Experience:`, value: `:sparkles: Network Level: ${networkLevel.toFixed(2)} ( ${record.networkEXP} )`},
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

        // Solo Normal
        var SkywarsSoloNormalKDR = record.stats.SkyWars.kills_solo_normal / record.stats.SkyWars.deaths_solo_normal;
        var SkywarsSoloNormalLDR = record.stats.SkyWars.wins_solo_normal / record.stats.SkyWars.losses_solo_normal;

        // Solo Insane Kills
        var SkywarsSoloInsaneKills = record.stats.SkyWars.kills_solo - record.stats.SkyWars.kills_solo_normal;
        var SkywarsSoloInsaneKDR = SkywarsSoloInsaneKills / record.stats.SkyWars.deaths_solo;

        // Solo Insane Wins
        var SkywarsSoloInsaneWins = record.stats.SkyWars.wins_solo - record.stats.SkyWars.wins_solo_normal;
        var SkywarsSoloInsaneLDR = SkywarsSoloInsaneWins / record.stats.SkyWars.losses_solo;

        // Ranked
        var RankedKDR = record.stats.SkyWars.kills_ranked / record.stats.SkyWars.deaths_ranked;
        var RankedLDR = record.stats.SkyWars.wins_ranked / record.stats.SkyWars.losses_ranked;

        var SkyWarsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
        .setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/774682965589884998/Skywars-64.png')
	    .setDescription("⏪ = General ⏩ = Bedwars")
        .addFields(
        { name: `Player:`, value: `${record._custom.names.stripped.name}` },
        { name: 'Extra Information:', value: `Winstreak: ${record.stats.SkyWars.win_streak}\n Souls: ${record.stats.SkyWars.souls}` },
        { name: `Normal Solo:`, value: `Wins: ${record.stats.SkyWars.wins_solo_normal} \nWLR: ${SkywarsSoloNormalLDR.toFixed(2)}\nKills: ${record.stats.SkyWars.kills_solo_normal}\nKDR: ${SkywarsSoloNormalKDR.toFixed(2)}` },
        { name: `Insane Solo:`, value: `Wins: ${SkywarsSoloInsaneWins} \nWLR: ${SkywarsSoloInsaneLDR.toFixed(2)}\nKills: ${SkywarsSoloInsaneKills}\nKDR: ${SkywarsSoloInsaneKDR.toFixed(2)}`},
        { name: `Normal Duo's:`, value: `Coming soon` },
        { name: `Insane Duo's:`, value: `Coming soon`},
        { name: `Ranked:`, value: `Wins: ${record.stats.SkyWars.wins_ranked} \nWLR: ${RankedLDR.toFixed(2)}\nKills: ${record.stats.SkyWars.kills_ranked}\nKDR: ${RankedKDR.toFixed(2)}\nCurrent Kit: ${record.stats.SkyWars.activeKit_RANKED}` },
        { name: `MEGA:`, value: `Coming soon`},
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);

        //
        //
        // Bedwars Embed
        //
        //

        var bedwarsLevel = (96 * 5000 + 7000) * 100;

        var BedWarsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
        .setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/774682819947135024/BedWars-64.png')
	    .setDescription("⏪ = Skywars ⏩ = N/A")
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},
        {name: `Extra Information:`, value: `Level: ${bedwarsLevel}⭐ ( ${record.stats.Bedwars.Experience} ) \nWinstreak: ${record.stats.Bedwars.winstreak}`},
        {name: `Solo:`, value: `Coming Soon!`},
        {name: `Duo:`, value: `Coming Soon!`},
        {name: `3's:`, value: `Coming Soon!`},
        {name: `4's:`, value: `Coming Soon!`},
        {name: `4v4:`, value: `Coming Soon!`},
        {name: `Dream:`, value: `Coming Soon!`},
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);


        //
        //
        // Sending MSGS
        //
        //

    message.channel.send(GeneralEmbed).then(async msg => {
    var emoji = await reactionMessage(msg, message.author, 300, ["⏩"]);
    
    if (emoji === "⏩") {
        message.channel.send(SkyWarsEmbed).then(async msg => {
            var emoji = await reactionMessage(msg, message.author, 300, ["⏪", "⏩"]);

            if (emoji === "⏪") {
                message.channel.send(GeneralEmbed).then(async msg => {
                    var emoji = await reactionMessage(msg, message.author, 300, ["⏩"]);
                    if (emoji === "⏩") {
                        message.channel.send(SkyWarsEmbed).then(async msg => {
                            var emoji = await reactionMessage(msg, message.author, 300, ["⏪", "⏩"]);
                            
                            if (emoji === "⏪") {
                                message.channel.send(GeneralEmbed);
                                    if (emoji === "⏩") {
                                        message.channel.send(BedWarsEmbed);
                                    }
                            }
                        });
                    }
                });
            }
        

            if (emoji === "⏩") {
                message.channel.send(BedWarsEmbed).then(async msg => {
                    var emoji = await reactionMessage(msg, message.author, 300, ["⏪", "⏩"]);
                    if (emoji === "⏪") {
                        message.channel.send(SkyWarsEmbed).then(async msg => {
                            var emoji = await reactionMessage(msg, message.author, 300, ["⏪", "⏩"]);
                            if (emoji === "⏪") {
                                message.channel.send(GeneralEmbed);
                            }

                            if (emoji === "⏩") {
                                message.channel.send(BedWarsEmbed);
                            }
                    });
                }


                if (emoji === "⏩") {
                    message.channel.send("Coming Soon!").then(async msg => {
                        var emoji = await reactionMessage(msg, message.author, 300, ["⏪"]);
                        if (emoji === "⏪") {
                            message.channel.send(BedWarsEmbed);

                        }
                    });
                }
                });
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


    time *= 750;

    for(const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, {max: 1, time: time}).then(collected => collected.first() && collected.first().emoji.name);

}
    });

}
module.exports.help = {
    name: "hs"
}