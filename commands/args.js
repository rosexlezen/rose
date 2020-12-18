const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply(`you have not given at least me one argument!`)
    else if(args[0]) return message.channel.send(`0: ${args[0]}`);
    else if(args[0] && args[1]) return message.channel.send(`0: ${args[0]}, 1: ${args[1]}`);
    else if(args[0] && args[1] && args[2]) return message.channel.send(`0: ${args[0]}, 1: ${args[1]}, 2: ${args[2]}`);
    else if(args[0] && args[1] && args[2] && args[3]) return message.channel.send(`0: ${args[0]}, 1: ${args[1]}, 2: ${args[2]}, 3: ${args[3]}`);
    else if(args[0] && args[1] && args[2] && args[3] && args[4]) return message.channel.send(`0: ${args[0]}, 1: ${args[1]}, 2: ${args[2]}, 3: ${args[3]}, 4: ${args[4]}`);
    else return message.reply(`you are a maniac!`);

} 

module.exports.help = {
    name: "args"
}