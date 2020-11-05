const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

if (totalSeconds == !days || !hours || !minutes) {
    message.channel.send(`Uptime is = ${seconds} seconds`);
} else if (totalSeconds == !days || !hours) {
    message.channel.send(`Uptime is = ${minutes} minutes, ${seconds} seconds`);
} else if (totalSeconds == !days) {
    message.channel.send(`Uptime is = ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
} else {
    message.channel.send(`Uptime is = ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
}
} 

module.exports.help = {
    name: "uptime"
}