const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        const sq = client.Queue.get(message.guild.id);
        if (!sq.connection || !sq.connection.dispatcher)
            return;
        sq.connection.dispatcher.resume();
    },

    help: {
        name: "resume",
        description: "Resume the current paused song",
        usage: "resume"
    }
};
