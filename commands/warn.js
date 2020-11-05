const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(client, message, args) => {

    // Permissions
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry but you cannot execute this command!");
    if (!args[0]) return message.reply("you need to specify a user.");
    if (!message.mentions.members.first()) return message.reply("you need to tag a user.");
    if (!args[1]) return message.reply("you need to specify a valid reason!");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("I cannot execute this command! Please give me ``Kick Permissions``");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if (!warnUser) return message.reply("I cannot find the user.");
    var reason = args.slice(1).join(" ");

    if(warnUser.hasPermission("ADMINISTRATOR")) return message.reply("you cannot warn this user.");

    // Command

    if(!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++; 

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
        if(err) console.log(err);
    });

    var warnEmbed = new discord.MessageEmbed()
    .setColor('#d105ff')
	.setTitle('Warned User!')
	.setDescription('Warn information:')
	.setThumbnail('https://cdn.discordapp.com/attachments/773879672676548609/773928084382154752/403-4036502_alarm-clipart-tornado-siren-warning-icon-png-download.png')
    .addFields(
        {name: `Warned By:`, value: `${message.author}`},
        {name: `User Warned:`, value: `${warnUser} (${warnUser.id})`},
        {name: `Reason:`, value: `${reason}`},
        {name: `Total Warns:`, value: warns[warnUser.id].warn},
        )
	.setTimestamp()
    .setFooter('creator: Lezen#3283', 'https://cdn.discordapp.com/attachments/773879672676548609/773880029859020820/awdaw.jpg');
    
    var channel = message.member.guild.channels.cache.find(c => c.name === 'logs');
    if(!channel) return message.channel.send(`please create a "logs" channel to see warn messages. \n` + warnEmbed);
    channel.send(warnEmbed);

} 

module.exports.help = {
    name: "warn"
}