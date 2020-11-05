const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sorry but you can't do this.")
        if (isNaN(args[0])) return message.channel.send("Please input a number.")
        if (args[0] > 100) return message.channel.send("Please input a number less than 100.")
        if (args[0] < 1) return message.channel.send("Please input a number larger than 0.")
        if (!args[0]) return message.replchannel.send("how many messages do you want to delete?")

        var embedDeleted = new discord.MessageEmbed()
            .setDescription("**Deleting Messages!**")
            .setColor("#8080f2")
            .addField(`_Messages deleted_:`, args[0])

            message.delete()
            message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(embedDeleted)).then(d => d.delete({timeout: 8000}))
            .catch(() => message.channel.send("Something went wrong while trying to delete messages."))

} 

module.exports.help = {
    name: "purge"
}