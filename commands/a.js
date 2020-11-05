const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

        // Permissions
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry but you cannot execute this command!");
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("I cannot execute this command! Please give me ``Kick Permissions``");
    
        // Command

        // var channel = message.member.guild.channels.cache.find(c => c.name === 'logs');
        // if(!channel) return message.channel.send('``please create a "logs" channel so warn will display there.``');
        // channel.send(`test`);

        const channel = client.channels.cache.find(c => c.name === 'logs');
        if(!channel) return;
        channel.send(`test`);

    }

module.exports.help = {
    name: "a"
}