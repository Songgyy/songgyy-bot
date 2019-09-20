const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        if (message.member.voiceChannel)
            message.member.voiceChannel.leave();
        client.Queue.delele(message.guild.id);
    },

    help: {
        name: "reset",
        description: "Reset the state of the bot",
        usage: "reset"
    }
};
