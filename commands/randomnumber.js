const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply(`Try /randomnumber 1 10`);
    if(!args[1]) return message.reply(`Try /randomnumber 1 10`);
    if(message.includes("-")) return message.reply(`Please input a positive number!`)

    var min = args[0], max = args[1];
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    message.channel.send(`Random Number: ${rand}`).then(d => d.delete({timeout: 20000}));

} 

module.exports.help = {
    name: "randomnumber"
}