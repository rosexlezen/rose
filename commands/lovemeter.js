const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

if (!args[0]) return message.reply("whose love do you want to check?");

    else if (!args[1] || !args[2]) return message.reply("please provide the names you want love check.");

    var result = Math.ceil(Math.random() * 100);
    if (user) member = message.guild.member(user);
    message.channel.send(`${message.author}, ${args[1]} and ${args[2]} are ${result}% in love`);

}

module.exports.help = {
    name: "lovemeter"
}