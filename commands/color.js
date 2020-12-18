const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!args[0]) return message.reply("use /color hex (#000000) or /color basics or /color minecraft");

    message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected => {
        if(collected.first().content.toLowerCase() == 'basics') {
            message.channel.send(`Coming soon.`);
        }

        else if(collected.first().content.toLowerCase() == 'minecraft') {
            message.channel.send(`Coming soon.`);
        }

        else if(collected.first().content.toLowerCase() == 'hex') {
            if (!args[0]) return message.reply(`Please provide a #`);
            message.channel.send(`Coming soon.`);
        }

        else {
            message.reply("use /color (#000000) or /color basics or /color minecraft");
        }
    });

}

module.exports.help = {
    name: "color"
}