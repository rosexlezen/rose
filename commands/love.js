const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

if (!args[0]) return message.reply("whose love do you want to check?");
    else if (!message.content.includes("@")) return message.reply("please tag the person you want check.");
    else if (!message.mentions.members.first()) return message.reply("you can't use the lovemeter on roles!");

    var result = Math.ceil(Math.random() * 100);
    
    let user = message.mentions.users.first(),member;
    if (user) member = message.guild.member(user);
    message.channel.send(`${message.author} and ${user} are ${result}% in love`);

}

module.exports.help = {
    name: "love"
}