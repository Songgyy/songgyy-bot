const Discord = require("discord.js");
const Songs = require('../controllers/songs');
const player = require('../controllers/player');

module.exports = {

    run: async (client, message, args) => {
        // if (!ServerQueue.filter(c => c.id == message.member.voiceChannel.id)) {
        let playlist = args[0];

        if (!playlist)
            return await message.channel.send(`That's not valid, see all with
                        ${client.prefix}playlists`)

        let serverQueue = client.Queue.get(message.guild.id);

        if (!serverQueue)
            return await message.channel.send("You must be in a Voice Room!");

        if (serverQueue.playlist === playlist)
            return await serverQueue.textChannel.send(`Already in ${playlist}`);

        serverQueue.playlist = playlist;

        let songs = await Songs.getSongs(playlist);

        if (songs.length < 1)
          return message.channel.send('Sem músicas nessa playlist');

        serverQueue.playlistSongs = songs.length;

        if (serverQueue.connection.dispatcher) {
          serverQueue.songs = [];
          serverQueue.connection.dispatcher.end();
        }

        serverQueue.songs = songs;
        player.play(serverQueue, message);
    },

    help: {
        name: "start",
        description: "Start a new playlist of songs, see help for playlists",
        usage: "start <playlist_name>"
    }
};
