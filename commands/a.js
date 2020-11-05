const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

        // Permissions
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry but you cannot execute this command!");
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("I cannot execute this command! Please give me ``Kick Permissions``");
    
        var warnUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
        if (!warnUser) return message.reply("I cannot find the user.");
        var reason = args.slice(1).join(" ");
    
        if(warnUser.hasPermission("ADMINISTRATOR")) return message.reply("you cannot warn this user.");
    
        // Command

        
        var channel = message.member.guild.channels.cache.find(c => c.name === 'logs');
        if(!channel) return message.channel.send(warnEmbed) && message.channel.send('``please create a "logs" channel so warn will display there.``');
        channel.send(`test`);

    }

module.exports.help = {
    name: "a"
}