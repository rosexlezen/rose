const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply(`you have not given at least me one argument!`)
    if(args[1]) return message.channel.send(`0: ${args[0]}`);
    if(args[1]) return message.channel.send(`0: ${args[0]}, 1: ${args[1]}`);
    if(args[1]) return message.channel.send(`0: ${args[0]}, 1: ${args[1]}, 2: ${args[2]}`);
    if(args[1]) return message.channel.send(`0: ${args[0]}, 1: ${args[1]}, 2: ${args[2]}, 3: ${args[3]}`);
    if(args[1]) return message.channel.send(`0: ${args[0]}, 1: ${args[1]}, 2: ${args[2]}, 3: ${args[3]}, 4: ${args[4]}`);

} 

module.exports.help = {
    name: "args"
}