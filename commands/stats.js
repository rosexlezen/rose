const discord = require("discord.js");
let fetch = require('node-fetch'); 

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply('please provide a username.');
    fetch(`https://api.plancke.io/hypixel/v1/player?player=${args[0]}`)
    .then(res => res.json()) 
    .then(( { record } ) => {
        return message.reply(`${record.displayname} has ${record.networkExp} Network EXP!`)
        })
    .catch(err => console.log(err));
    }

module.exports.help = {
    name: "stats",
}