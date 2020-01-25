const Discord = require("discord.js");
const player = require('../controllers/player');

module.exports = {

    run: async (client, message, args) => {
        // Play songs
        //
        if (!serverQueue) {
            return await message.channel.send(`not connected`)
        }
        let youtube_link = args[0]
        if (!youtube_link) {
            return await message.channel.send(`Please, provide a valid link.`)
        }


        let serverQueue = client.Queue.get(message.guild.id);

        if (!player.canPlay(serverQueue, message))
            return;

        serverQueue.songs.push({ youtube_link });

        if (serverQueue.playing) {
            serverQueue.textChannel.send("Already playing, added to queue");
            return;
        }

        player.play(serverQueue, message);
    },

    help: {
        name: "play",
        description: "Plays a youtube music, or add to queue if playing",
        usage: "play <youtube_url>"
    }
};
