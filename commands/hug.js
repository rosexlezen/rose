const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!args[0]) return message.reply("who do you want to hug?");
        else if (!message.content.includes("@")) return message.reply("please tag the person you want to hug.");
        else if (!message.mentions.members.first()) return message.reply("you can't hug roles!");

        let user = message.mentions.users.first(),
        member;
        if (user) member = message.guild.member(user);
        message.channel.send(`${message.author} hugged ${user}`)

        var hugs = [
            "https://tenor.com/view/milk-and-mocha-hug-love-heart-couple-gif-17258498",
            "https://tenor.com/view/peach-cat-hug-hug-up-love-mochi-mochi-peach-cat-gif-16334628",
            "https://tenor.com/view/milk-and-mocha-bear-couple-line-hug-cant-breathe-gif-12687187",
            "https://tenor.com/view/virtual-hug-gif-5026057",
            "https://tenor.com/view/hug-peachcat-cat-cute-gif-13985247",
            "https://tenor.com/view/hugs-hug-ghost-hug-gif-4451998",
            "https://tenor.com/view/milk-and-mocha-hug-cute-kawaii-love-gif-12535134"
        ]

        var hug = hugs[Math.floor(Math.random() * hugs.length)];
        return message.channel.send(`${hug}`);
}

module.exports.help = {
    name: "/hug"
}