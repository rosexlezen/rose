const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.channel.send('```Create a channel called: "reactionroles", type /c-color (example: /c-pink). Make sure you have "Administrator role."```');
    
} 

module.exports.help = {
    name: "/c-help",
}