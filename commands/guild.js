const discord = require("discord.js");
const Hypixel = require('hypixel');

module.exports.run = async(client, message, args) => {

    const client = new Hypixel({ key: 'ddb38afa-e06e-454a-9458-303a2bf53839' });

client.findGuildByPlayer(playerUuid, (err, guildId) => {
    if (err) {
    return console.info(err);
  }
  
  client.findGuildByPlayer(player.uuid)
     .then((guildId) => {
         message.channel.send(`Guild: ${guildId} | UUID: ${playerUuid}`)
     })
     .catch((err) => {
        console.log(err);
     });
});
}
module.exports.help = {
    name: "stats",
}
