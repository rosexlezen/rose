const discord = require("discord.js");
let fetch = require('node-fetch'); 


module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then( ({ record, success }) => { 

        if(success === false) return message.channel.send("``Player not found!``");

        //
        //
        // General Embed
        //
        //

        var networkLevel = (Math.sqrt(record.networkExp + 15312.5) - 125/Math.sqrt(2))/(25*Math.sqrt(2));

        var GeneralEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
        .setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/774244292713512990/AATXAJwDxeYJZqn6lKdo1rMjgn1Jv9bGy4GPzQDlFyIawAs900-c-k-c0x00ffffff-no-rj.png')
	    .setDescription("⏩ = SkyWars")
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},
        {name: `UUID:`, value: `:bust_in_silhouette: UUID: ${record.uuid}`},
        {name: `Previous Names:`, value: `:busts_in_silhouette: Known Alts: ${record.knownAliases} https://nl.namemc.com/profile/${args[0]}`},
        {name: `Network Experience:`, value: `:sparkles: Network Level: ${networkLevel.toFixed(2)} ( ${record.networkExp} )`},
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

        // Solo Insane 
        var SkywarsSoloInsaneKills = record.stats.SkyWars.kills_solo - record.stats.SkyWars.kills_solo_normal;
        var SkywarsSoloInsaneKDR = SkywarsSoloInsaneKills / record.stats.SkyWars.deaths_solo;

        var SkywarsSoloInsaneWins = record.stats.SkyWars.wins_solo - record.stats.SkyWars.wins_solo_normal;
        var SkywarsSoloInsaneLDR = SkywarsSoloInsaneWins / record.stats.SkyWars.losses_solo;

        // Teams Normal
        var SkywarsTeamsNormalKDR = record.stats.SkyWars.kills_team_normal - record.stats.SkyWars.deaths_team_normal;
        //var SkywarsTeamsNormalWLR = - record.stats.SkyWars.losses_team_normal;

        // Teams Insane
        var SkywarsInsaneKills = record.stats.SkyWars.kills_team - record.stats.SkyWars.kills_team_normal;
        var SkywarsTeamsInsaneKDR = SkywarsInsaneKills - record.stats.SkyWars.deaths_team_insane;
        //var SkywarsTeamsInsaneWLR = - record.stats.SkyWars.losses_team_insane;


        // Ranked
        var RankedKDR = record.stats.SkyWars.kills_ranked / record.stats.SkyWars.deaths_ranked;
        var RankedLDR = record.stats.SkyWars.wins_ranked / record.stats.SkyWars.losses_ranked;

        var SkyWarsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
        .setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/774682965589884998/Skywars-64.png')
	    .setDescription("⏪ = General ⏩ = Bedwars")
        .addFields(
        { name: `Player:`, value: `${record._custom.names.stripped.name}` },
        { name: 'Extra Information:', value: `Winstreak: ${record.stats.SkyWars.win_streak}\n Souls: ${record.stats.SkyWars.souls}\nCoins: ${record.stats.SkyWars.coins} \nHeads: ${record.stats.SkyWars.heads}\nLast Played: ${record.stats.SkyWars.lastMode}\nBlock Placed: ${record.stats.SkyWars.blocks_placed} \nChests Opened: ${record.stats.SkyWars.chests_opened_team}\nEggs Thrown: ${record.stats.SkyWars.egg_thrown}` },
        { name: `Normal Solo:`, value: `Wins: ${record.stats.SkyWars.wins_solo_normal} \nWLR: ${SkywarsSoloNormalLDR.toFixed(2)}\nKills: ${record.stats.SkyWars.kills_solo_normal}\nKDR: ${SkywarsSoloNormalKDR.toFixed(2)}`,  inline: true },
        { name: `Insane Solo:`, value: `Wins: ${SkywarsSoloInsaneWins} \nWLR: ${SkywarsSoloInsaneLDR.toFixed(2)}\nKills: ${SkywarsSoloInsaneKills}\nKDR: ${SkywarsSoloInsaneKDR.toFixed(2)}`,  inline: true},
        { name: `Normal Duo's:`, value: `Wins: Coming Soon! \nWLR: Coming Soon!\nKills: ${record.stats.SkyWars.kills_team_normal}\nKDR: ${SkywarsTeamsNormalKDR.toFixed(2)}`,  inline: true },
        { name: `Insane Duo's:`, value: `Wins: Coming Soon! \nWLR: Coming Soon! \nKills: ${SkywarsInsaneKills}\nKDR: ${SkywarsTeamsInsaneKDR.toFixed(2)}`,  inline: true},
        { name: `Ranked:`, value: `Wins: ${record.stats.SkyWars.wins_ranked} \nWLR: ${RankedLDR.toFixed(2)}\nKills: ${record.stats.SkyWars.kills_ranked}\nKDR: ${RankedKDR.toFixed(2)}\nCurrent Kit: ${record.stats.SkyWars.activeKit_RANKED}`,  inline: true },
        )
	    .setTimestamp()
        .setFooter(`Executed by: ${message.author.tag}`, `${message.author.avatarURL()}`);

        //
        //
        // Bedwars Embed
        //
        //

        var bedwarsLevel = (96 * 5000 + 7000) / 100;

        // Overall Bedwars
        var OverallBedwarsLDR = record.stats.Bedwars.wins_bedwars - record.stats.Bedwars.losses_bedwars;
        var OverallBedwarsFKDR = record.stats.Bedwars.final_kills_bedwars - (record.stats.Bedwars.final_deaths_bedwars + record.stats.Bedwars.kills_bedwars);
        var OverallBedwarsKDR = record.stats.Bedwars.deaths_bedwars - record.stats.Bedwars.kills_bedwars; 

        // Solo Bedwars
        var SoloBedwarsLDR = record.stats.Bedwars.eight_one_wins_bedwars - record.stats.Bedwars.eight_one_losses_bedwars;
        var SoloBedwarsFKDR = record.stats.Bedwars.eight_one_final_kills_bedwars - (record.stats.Bedwars.eight_one_final_deaths_bedwars + record.stats.Bedwars.eight_one_deaths_bedwars);
        var SoloBedwarsKDR = record.stats.Bedwars.eight_one_kills_bedwars - record.stats.Bedwars.eight_one_deaths_bedwars;

        // Duo Bedwars
        var DuoBedwarsLDR = record.stats.Bedwars.eight_two_wins_bedwars - record.stats.Bedwars.eight_two_losses_bedwars;
        var DuoBedwarsFKDR = record.stats.Bedwars.eight_two_final_kills_bedwars - (record.stats.Bedwars.eight_two_final_deaths_bedwars + record.stats.Bedwars.eight_two_deaths_bedwars);
        var DuoBedwarsKDR = record.stats.Bedwars.eight_two_kills_bedwars - record.stats.Bedwars.eight_two_deaths_bedwars;

        // Threes Bedwars
        var ThreeBedwarsLDR = record.stats.Bedwars.four_three_wins_bedwars - record.stats.Bedwars.four_three_losses_bedwars;
        var ThreeBedwarsFKDR = record.stats.Bedwars.four_three_final_kills_bedwars - (record.stats.Bedwars.four_three_final_deaths_bedwars + record.stats.Bedwars.four_three_deaths_bedwars);
        var ThreeBedwarsKDR = record.stats.Bedwars.four_three_kills_bedwars - record.stats.Bedwars.four_three_deaths_bedwars;

        // Fours Bedwars
        var FourBedwarsLDR = record.stats.Bedwars.four_four_wins_bedwars - record.stats.Bedwars.four_four_losses_bedwars;
        var FourBedwarsFKDR = record.stats.Bedwars.four_four_final_kills_bedwars - (record.stats.Bedwars.four_four_final_deaths_bedwars + record.stats.Bedwars.four_four_deaths_bedwars);
        var FourBedwarsKDR = record.stats.Bedwars.four_four_kills_bedwars - record.stats.Bedwars.four_four_deaths_bedwars;

        var BedWarsEmbed = new discord.MessageEmbed()
        .setColor('#d105ff')
        .setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/774682819947135024/BedWars-64.png')
	    .setDescription("⏪ = Skywars ⏩ = N/A")
        .addFields(
        {name: `Player:`, value: `${record._custom.names.stripped.name}`},
        {name: `Disclaimer:`, value: `KDR, FKDR & WLR could be bugged.`},
        {name: `Extra Information:`, value: `Level: Soon. ( ${record.stats.Bedwars.Experience} ) \nWinstreak: ${record.stats.Bedwars.winstreak}`},
        {name: `Overall:`, value: `Wins: ${record.stats.Bedwars.wins_bedwars}\nWLR: ${OverallBedwarsLDR} \nKills: ${record.stats.Bedwars.kills_bedwars} \nKDR: Coming Soon. \nFinal Kills: ${record.stats.Bedwars.final_kills_bedwars} \nFinal Deaths: ${record.stats.Bedwars.eight_one_final_deaths_bedwars} \nFKDR: ${OverallBedwarsFKDR} \nCurrent Winstreak: ${record.stats.Bedwars.winstreak} \nBeds Broken: ${record.stats.Bedwars.beds_broken_bedwars} \nBeds Lost ${record.stats.Bedwars.beds_lost_bedwars}`,  inline: true},
        {name: `Solo:`, value: `Wins: ${record.stats.Bedwars.eight_one_wins_bedwars}\nWLR: ${SoloBedwarsLDR} \nKills: ${record.stats.Bedwars.eight_one_kills_bedwars} \nKDR: ${SoloBedwarsKDR} \nFinal Kills: ${record.stats.Bedwars.eight_one_final_kills_bedwars} \nFinal Deaths: ${record.stats.Bedwars.eight_one_final_deaths_bedwars} \nFKDR: ${SoloBedwarsFKDR} \nCurrent Winstreak: ${record.stats.Bedwars.eight_one_winstreak} \nBeds Broken: ${record.stats.Bedwars.eight_one_beds_broken_bedwars} \nBeds Lost ${record.stats.Bedwars.eight_one_beds_lost_bedwars}`,  inline: true},
        {name: `Duo:`, value: `Wins: ${record.stats.Bedwars.eight_two_wins_bedwars}\nWLR: ${DuoBedwarsLDR} \nKills: ${record.stats.Bedwars.eight_two_kills_bedwars} \nKDR: ${DuoBedwarsKDR} \nFinal Kills: ${record.stats.Bedwars.eight_two_final_kills_bedwars} \nFinal Deaths: ${record.stats.Bedwars.eight_two_final_deaths_bedwars} \nFKDR: ${DuoBedwarsFKDR} \nCurrent Winstreak: ${record.stats.Bedwars.eight_two_winstreak} \nBeds Broken: ${record.stats.Bedwars.eight_two_beds_broken_bedwars} \nBeds Lost ${record.stats.Bedwars.eight_two_beds_lost_bedwars}`,  inline: true},
        {name: `3's:`, value: `Wins: ${record.stats.Bedwars.four_three_wins_bedwars}\nWLR: ${ThreeBedwarsLDR} \nKills: ${record.stats.Bedwars.four_three_kills_bedwars} \nKDR: ${ThreeBedwarsKDR} \nFinal Kills: ${record.stats.Bedwars.four_three_final_kills_bedwars} \nFinal Deaths: ${record.stats.Bedwars.four_three_final_deaths_bedwars} \nFKDR: ${ThreeBedwarsFKDR} \nCurrent Winstreak: ${record.stats.Bedwars.four_three_winstreak} \nBeds Broken: ${record.stats.Bedwars.four_three_beds_broken_bedwars} \nBeds Lost ${record.stats.Bedwars.four_three_beds_lost_bedwars}`,  inline: true},
        {name: `4's:`, value: `Wins: ${record.stats.Bedwars.four_four_wins_bedwars}\nWLR: ${FourBedwarsLDR} \nKills: ${record.stats.Bedwars.four_four_kills_bedwars} \nKDR: ${FourBedwarsKDR} \nFinal Kills: ${record.stats.Bedwars.four_four_final_kills_bedwars} \nFinal Deaths: ${record.stats.Bedwars.four_four_final_deaths_bedwars} \nFKDR: ${FourBedwarsFKDR} \nCurrent Winstreak: ${record.stats.Bedwars.four_four_winstreak} \nBeds Broken: ${record.stats.Bedwars.four_four_beds_broken_bedwars} \nBeds Lost ${record.stats.Bedwars.four_four_beds_lost_bedwars}`,  inline: true},
        {name: `4v4:`, value: `Wins: ${record.stats.Bedwars.two_four_wins_bedwars}\nFinal Kills: ${record.stats.Bedwars.two_four_final_kills_bedwars} \nCurrent Winstreak: ${record.stats.Bedwars.two_four_winstreak} \nBeds Broken: ${record.stats.Bedwars.two_four_beds_broken_bedwars} \n`,  inline: true},
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