const weather = require('weather-js');

const discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    weather.find({search: args.join(" "), degreeType: 'C'}, function(error, result) {
        if(error) return message.channel.send(error);
        if(!args[0]) return message.reply(`please specify a location.`);

        if(result === undefined || result.length === 0) return message.reply("```Invalid Location.```");

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Disocrd.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setcolor(0x111111)
        .addField(`Timezone`, `UTC${location.timezone}`, true)
        .addField(`Degree Type`, `Celcius`, true)
        .addField(`Temprature`, `${current.temprature} °C`, true)
        .addField(`Wind`, current.winddisplay, true)
        .addField(`Feels like`, `${current.feelslike} °C`, true)
        .addField(`Humidity`, `${current.humidity}%`, true)

        message.channel.send(weatherinfo);
    });

}

module.exports.help = {
    name: "weather",
}