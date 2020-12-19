const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var result = Math.ceil(Math.random() * 250);

    let user = message.mentions.users.first(),
    member;
    if (user) member = message.guild.member(user);

    if(user) {
        message.channel.send(`${user}'s IQ is: ${result}`);
    }
    else {
    message.channel.send(`${message.author}'s IQ is: ${result}`);
    }  
} 

module.exports.help = {
    name: "/iq",
}