const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry but you cannot use this command!");
    if (!args[0]) return message.reply("you need to specify an user.");
    if (!args[1]) return message.reply("you need to specify a valid reason!");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("I cannot execute this command! Please give me ``Kick Permissions``");

    var warnUser = message.guild.member(message.mentions.user.first() || message.guild.member.get(args[0]));
    if (!warnUser) return message.reply("I cannot find the user.");
    var reason = args.slice(1).join(" ");

    if(warnUser.hasPermission("ADMINISTRATOR")) return message.reply("you cannot warn this user.");

} 

module.exports.help = {
    name: "warn"
}