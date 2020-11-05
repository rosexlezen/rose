const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const channel = client.channels.cache.find(c => c.name === 'logs');
    if(!channel) return;
    channel.send(`meow`);

    }

module.exports.help = {
    name: "a"
}