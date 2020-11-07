const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

message.channel.send(`_Please wait until all emojis have been loaded._`);
message.channel.send("**―――――――――――――――**\nChoose a question\n**―――――――――――――――**").then(async msg => {
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

}
module.exports.help = {
    name: "kev"
}