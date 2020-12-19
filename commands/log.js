const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(message.author.id === "474306829459914753") return console.log("----------------------\n----------------------\n----------------------\n");
    else {
    message.reply(`You cannot do this.`).then(d => d.delete({timeout: 5000}));
    }
} 

module.exports.help = {
    name: "/log"
}