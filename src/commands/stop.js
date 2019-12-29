const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        const sq = client.Queue.get(message.guild.id);
        sq.songs = [];
        if (sq.connection.dispatcher)
            sq.connection.dispatcher.end();
        else
            sq.textChannel.send(`Something bad happend stopping this queue`);
    },

    help: {
        name: "stop",
        description: "Stop all media that is currently playing",
        usage: "stop"
    }
};
