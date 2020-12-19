const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var value = ["Head", "Tails"];
        var result = value[Math.floor(Math.random() * value.length)]
        message.channel.send(`The coin landed on **${result}**`);

} 

module.exports.help = {
    name: "/coin",
}