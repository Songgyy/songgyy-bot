const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        if (message.member.voiceChannel)
            message.member.voiceChannel.leave();
        if (client.Queue)
            if (client.Queue)
                client.Queue = new Map()
    },

    help: {
        name: "reset",
        description: "Reset the state of the bot",
        usage: "reset"
    }
};
