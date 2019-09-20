const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
      let voiceChannel = message.member.voiceChannel;
      if (!voiceChannel) return message.channel.send("Are you in a voiceRoom?");
      let permissions = voiceChannel.permissionsFor(message.client.user);

      if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
          return message.channel.send(
          `I need the permissions to join and speak in your voice channel!`);
      }

      if(!client.Queue.has(message.guild.id)) {
        let queueConstruct = {
          textChannel: message.channel,
          voiceChannel: voiceChannel,
          connection: await voiceChannel.join(),
          songs: [],
          playlist: '',
          playlistSongs: 0,
          volume: 5,
          playing: false
        };
        client.Queue.set(message.guild.id, queueConstruct);
        return;
      }

      let sq = client.Queue.get(message.guild.id);
      if (sq.voiceChannel.id === voiceChannel.id) return;
      message.channel.send("Something is wrong, I'm killing our connection!");
      client.Queue.delete(message.guild.id);
      await voiceChannel.leave();
    },

    help: {
        name: "join",
        alias: ["j", "enter"],
        description: "Join the bot to your current chat room",
        usage: "join"
    }
};
