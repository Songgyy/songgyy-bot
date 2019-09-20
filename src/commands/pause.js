const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        const sq = client.Queue.get(message.guild.id);
        if (!sq.connection || !sq.connection.dispatcher)
            return;
        sq.connection.dispatcher.pause();
        // await message.send(this.help.name);
    },

    help: {
        name: "pause",
        description: "Pauses the current song",
        usage: "pause"
    }
};
