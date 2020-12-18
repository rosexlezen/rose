const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!args[0]) return message.reply("use /color hex (#000000) or /color basics or /color minecraft");

    message.channel.awaitMessages(m => m.author.id === message.author.id, {max:1}).then(collected => {
        if(collected.first().content.toLowerCase() == 'basics') {
            message.channel.send("``:black: Black » &0 \n:dark_blue: Dark Blue » &1 \n:dark_green: Dark Green » &2 \n:dark_turquoise: Dark Turquoise » &3\n:dark_red: Dark Red » &4 \n:purple: Purple » &5 \n:gold: Gold » &6 \n:gray: Light Gray » &7 \n:dark_gray: Dark Gray » &8 \n:blue: Blue » &9 \n:green: Green » &a \n:turqiouse: Turqiouse » &b \n:red: Red » &c \n:pink: Pink » &d \n:yellow: Yellow » &e \n:white: White » &f``");
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