const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    setTimeout(() => {
        message.channel.send("Ping = ``" + (message.createdTimestamp - Date.now()) + "ms``");
    }, 200);

} 

module.exports.help = {
    name: "ping"
}