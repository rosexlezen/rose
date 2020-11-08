const discord = require("discord.js");
let fetch = require('node-fetch'); 


module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then( ({ record, success }) => { 

        if(success === false) return message.channel.send("``Player not found!``");

        message.channel.send(`Player ${record._custom.names.stripped.name} has ${record.stats.SkyWars.heads} Heads \nHead: ${record.stats.SkyWars.head_collection.recent.sacrifice} in: ${record.stats.SkyWars.head_collection.recent.mode}`)
});
}
module.exports.help = {
name: "hs"
}