const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.channel.send("Coming Soon!");
    //message.channel.send(":black: Black » &0 \n:dark_blue: Dark Blue » &1 \n:dark_green: Dark Green » &2 \n:dark_turquoise: Dark Turquoise » &3\n:dark_red: Dark Red » &4 \n:purple: Purple » &5 \n:gold: Gold » &6 \n:gray: Light Gray » &7 \n:dark_gray: Dark Gray » &8 \n:blue: Blue » &9 \n:green: Green » &a \n:turqiouse: Turqiouse » &b \n:red: Red » &c \n:pink: Pink » &d \n:yellow: Yellow » &e \n:white: White » &f");

}

module.exports.help = {
    name: "color"
}