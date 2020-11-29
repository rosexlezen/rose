const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(message.author.id != "esmee#9999") return message.reply(`You cannot do this.`).then(d => d.delete({timeout: 5000}));
    else {
    console.log("----------------------\n----------------------\n----------------------\n")
    }
} 

module.exports.help = {
    name: "log"
}