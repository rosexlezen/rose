const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var result = Math.ceil(Math.random() * 250);
    message.channel.send(`${message.author}'s IQ is: ${result}`);

} 

module.exports.help = {
    name: "/iqmeter",
}