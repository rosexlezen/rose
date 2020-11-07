const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

message.channel.send(`_Please wait until all emojis have been loaded._`);
message.channel.send("**―――――――――――――――**\nChoose a question\n**―――――――――――――――**").then(async msg => {
    var emoji = await reactionMessage(msg, message.author, 300, ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]);

    //
    // Question 1
    //

    if (emoji === "1️⃣") {
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
    // Question 2
    //

    if (emoji === "2️⃣") {
        message.channel.send(`**―――――――――――――――**\nWhich brackets do you use around a p?**―――――――――――――――**`);
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == '<>' || collected.first().content.toLowerCase() == '<' || collected.first().content.toLowerCase() == '>') {
                message.reply(`your answer is correct!`);
            } else {
                message.reply(`your answer is incorrect!`);
            }
        });
    }

    //
    // Question 3
    //
    
    if (emoji === "3️⃣") {
        message.channel.send("**―――――――――――――――**\nWhat code should be on the dots?: ``<img ...='myImage.png' alt='Image of a tree.'>``\n**―――――――――――――――**");
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == 'src' || collected.first().content.toLowerCase() == 'source') {
                message.reply(`your answer is correct!`);
            } else {
                message.reply(`your answer is incorrect!`);
            }
        });
    }

    //
    // Question 4
    //
     
    if (emoji === "4️⃣") {
        message.channel.send(`**―――――――――――――――**\nHow do you add comments to JavaScript?\n**―――――――――――――――**`);
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == '//') {
                message.reply(`your answer is correct!`);

            } else {
                message.reply(`your answer is incorrect!`);
            }
        });
    }

    //
    // Question 5
    //
    
    if (emoji === "5️⃣") {
        message.channel.send(`**―――――――――――――――**\nAre your pupils bigger or smaller in bright light?\n**―――――――――――――――**`);
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == 'smaller' || collected.first().content.toLowerCase() == 'small') {
                message.reply(`your answer is correct!`);
            } else if (collected.first().content.toLowerCase) {
                message.reply(`your answer is incorrect!`);
            }
        });
    }
    
    //
    // Question 6
    //

    if (emoji === "6️⃣") {
        message.channel.send(`**―――――――――――――――**\nWhat is the largest animal in the world?\n**―――――――――――――――**`);
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == 'whale' || collected.first().content.toLowerCase() == 'blue whale' || collected.first().content.toLowerCase() == 'antartic blue whale') {
                message.reply(`your answer is correct!`);
            } else {
                message.reply(`your answer is incorrect!`);
            }
        });
    }
    
    //
    // Question 7
    //

    if (emoji === "7️⃣") {
        message.channel.send(`**―――――――――――――――**\nHow many bones does the human body have?\n**―――――――――――――――**`);
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == '206' || collected.first().content.toLowerCase() == 'two hundred and six') {
                message.reply(`your answer is correct!`);
            } else {
                message.reply(`your answer is incorrect!`);
            }
        });
    }
    
    //
    // Question 8
    //

    if (emoji === "8️⃣") {
        message.channel.send(`**―――――――――――――――**\nHow far is the sun from the earth?\n**―――――――――――――――**`);
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{

            if(collected.first().content.toLowerCase() == '93 million miles' || collected.first().content.toLowerCase() == '93 mil miles' || collected.first().content.toLowerCase() == '9300000') {
                message.reply(`your answer is correct!`);
            } else {
                message.reply(`your answer is incorrect!`);
            }
        });
    }
    
    //
    // Question 9
    //

    if (emoji === "9️⃣") {
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

}
module.exports.help = {
    name: "quiz"
}