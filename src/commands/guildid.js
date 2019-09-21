const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        await message.channel.send(`Your guild id is **${message.guild.id}**`);
    },

    help: {
        name: "guildid",
        alias: [ "guild" ],
        description: "Show the guild id!",
        usage: "guildid"
    }
};
