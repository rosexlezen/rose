const math = require("math.js");
const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply("please input a calculation.");
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.reply("please input a valid calculation.")
    }

    const calcEmbed = new discord.MessageEmbed()
    .setColor(`d105ff`)
    .setTitle(`Math Calculation`)
    .addField(`Input`, `js\n${args.join(' ')}`)
    .addField('Output', `js\n${resp}`)

    message.channel.send(calcEmbed)
} 

module.exports.help = {
    name: "calc"
}