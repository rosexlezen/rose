const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!args[1]) return message.reply(`Try /randomnumber 1 10`);
    if(!args[2]) return message.reply(`Try /randomnumber 1 10`);

    var min = args[1], max = args[2];
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    message.channel.send(`Random Number: ${rand}`).then(d => d.delete({timeout: 20000}));

} 

module.exports.help = {
    name: "randomnumber"
}