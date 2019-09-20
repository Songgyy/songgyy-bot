const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        await message.send(this.help.name);
    },

    help: {
        name: "$name",
        description: "$description",
        usage: "$name $args"
    }
};
