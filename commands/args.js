const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(args[1]) return message.channel.send(args[0]);
    if(args[1]) return message.channel.send(args[0] + args[1]);
    if(args[1]) return message.channel.send(args[0] + args[1] + args[2]);
    if(args[1]) return message.channel.send(args[0] + args[1] + args[2] + args[3]);
    if(args[1]) return message.channel.send(args[0] + args[1] + args[2] + args[3] + args[4]);

} 

module.exports.help = {
    name: "args"
}