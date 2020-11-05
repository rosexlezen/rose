const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var result = Math.ceil(Math.random() * 6);
    message.channel.send(`:game_die: ${message.author} rolled ${result}`);

} 

module.exports.help = {
    name: "dice"
}