const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        const sq = client.Queue.get(message.guild.id);
        if (sq && sq.connection) {
            if (sq.connection.dispatcher) {
                sq.songs = [];
                sq.connection.dispatcher.end();
            }
            sq.connection.disconnect();
        }

        sq.textChannel.send("Leaving your channel!");
        client.Queue.delete(message.guild.id);
    },

    help: {
        name: "leave",
        description: "Make the bot leave your voice room",
        usage: "leave"
    }
};
