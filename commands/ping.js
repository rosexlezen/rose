const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.channel.send("Ping = ``+/" + (message.createdTimestamp - Date.now()) + "ms``");

} 

module.exports.help = {
    name: "/ping"
}