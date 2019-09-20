const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        const sq = client.Queue.get(message.guild.id);
        sq.songs = [];
        sq.connection.dispatcher.end();
    },

    help: {
        name: "stop",
        description: "Stop all media that is currently playing",
        usage: "stop"
    }
};
