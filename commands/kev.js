
        const discord = require("discord.js");
        let fetch = require('node-fetch'); 
        
        module.exports.run = async(client, message, args) => {
        
            message.channel.send(`_testing_`);
                var emoji = await reactionMessage(msg, message.author, ["⏪", "⏩"]);
        
                //
                // Testing one
                //
        
                if (emoji === "⏪") {
                    message.channel.send(`**―――――――――――――――**\nKevoe is fat\n**―――――――――――――――**`);
                    message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected =>{
        
                        if(collected.first().content.toLowerCase() == 'test') {
                            message.reply(`your answer is correct!`);
        
                        } else {
                            message.reply(`your answer is incorrect!`);
                        }
        
                    });
                } else if (emoji === "⏩") {
                    message.channel.send(`_testing_`);
                }
        
        }      
    
        
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
        
        
        module.exports.help = {
            name: "kev",
        }