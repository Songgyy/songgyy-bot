const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        const sq = client.Queue.get(message.guild.id);
        if (sq.connection)
            return sq.connection.dispatcher.end();
        return sq.textChannel.send("Not playing a thing");

    },

    help: {
        name: "skip",
        description: "Skip the current song",
        usage: "skip",
        alias: ["end", "s"]
    }
};
