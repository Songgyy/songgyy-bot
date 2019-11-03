const Discord = require("discord.js");
const guild = require("./../controllers/guild");

module.exports = {
  run: async (client, message, args) => {
    const { id, name } = message.guild;

    const result = guild.registerGuild(id, name);

    if (result.error)
      return await message.channel.send("Error registering this guild");
    return await message.channel.send("Guild registered");
  },

  help: {
    name: "register",
    description:
      "Register this guild to the main server, allowing to have playlists.",
    usage: "register"
  }
};
