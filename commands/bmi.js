const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    collector.on('collect', m => {
    message.channel.send(`How tall are you in meters?`);
    if (args[0] === isNaN) return message.reply("please input an int!");
    var length = args[-1];
});
    collector.on('collect', m => {
    message.channel.send(`How much do you weight?`);
    if (args[0] === isNaN) return message.reply("please input an int!");
    var weight = args[-1];
})

    var lengthSquare = length ** 2;
    var BMI = weight / lengthSquare * 10000;

    message.channel.send(`The calculated BMI is: ${BMI.toFixed(2)}`);

    if (BMI < 18) return message.reply("_The BMI is too low!_");
    if (BMI > 18 && BMI < 25) return message.reply("_The BMI is good!_");
    if (BMI > 25) return message.reply("_The BMI is too high!_");
}

module.exports.help = {
    name: "bmi"
}