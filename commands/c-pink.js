const discord = require("discord.js");
const client = new discord.Client();
const guild = client.guilds.cache.get("770516707370467328");

module.exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you cannot use this command!");
    if ((message.guild.channels.cache.find(c => c.name.toLowerCase() === "reactionroles"))) {

    guild.roles.create({ data: { name: 'test', color: ['#f9d4fa'] } });
    guild.roles.create({ data: { name: 'test1', color: ['#f599f7'] } });

    const picture = new discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/770574971818344448/789994438654558228/tenor_1.gif')

    const ColorPink = new discord.MessageEmbed()
    .setColor("#000000")
    .addFields(
        {value: "@test"},
        {value: "@test1"}
    )

    message.channel.send(picture)
    message.channel.send(ColorPink);
    }
    else {
        message.reply('```Create a channel called: "reactionroles"```');
    }
    
} 

module.exports.help = {
    name: "/c-pink",
}