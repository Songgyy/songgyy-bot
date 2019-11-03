const Discord = require("discord.js");
const Playlists = require("../controllers/playlists");

module.exports = {
  run: async (client, message, args) => {
    let playlists = await Playlists.getPlaylists();

    let embed = {
      color: client.theme.color,
      title: "Command list for Songyy-bot",
      url: "https://github.com/gabrielpetry/songyy-bot",
      description: "All available commands",
      footer: {
        text: "Songyy-Bot"
      },
      fields: []
    };

    if (playlists) {
      playlists.map(playlist => {
        embed.fields.push({
          name: `**${playlist.name}**`,
          value: `has ${playlist.songs.length} songs`
        });
      });
      return await message.channel.send({ embed });
    }
    return await message.channel.send("Error loading playlists");
  },

  help: {
    name: "playlists",
    description: "Show all playlists and the amount of songs in each",
    usage: "playlists"
  }
};
