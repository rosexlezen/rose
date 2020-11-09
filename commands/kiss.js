const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!args[0]) return message.reply("who do you want to kiss?");
    else if (!message.content.includes("@")) return message.reply("please tag the person you want to kiss.");
    else if (!message.mentions.members.first()) return message.reply("you can't kiss roles! Kiss me instead ;3");

    let user = message.mentions.users.first(),
    member;
    if (user) member = message.guild.member(user);
    message.channel.send(`${message.author} kissed ${user}`)

    var kisses = [
        "https://tenor.com/view/milk-and-mocha-bear-couple-kisses-kiss-love-gif-12498627",
        "https://tenor.com/view/bear-blow-a-kiss-love-hearts-kissing-gif-11674749",
        "https://tenor.com/view/kisses-love-couple-kiss-muah-gif-16851922",
        "https://tenor.com/view/love-you-lots-kiss-peachcat-gif-13985240",
        "https://tenor.com/view/milk-and-mocha-kiss-love-in-love-gif-11453877",
        "https://tenor.com/view/kiss-lip-kisses-love-heart-gif-13001030"
    ]

    var kiss = kisses[Math.floor(Math.random() * kisses.length)];
    return message.channel.send(`${kiss}`);
}

module.exports.help = {
    name: "kiss"
}