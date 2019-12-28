const ytdl = require('ytdl-core');

module.exports = {
  play: async (sq, message) => {

    const song = sq.songs[0];

    if (!song) {
      sq.textChannel.send("Nothing else to play!");
      sq.playing = false;
      return false;
    }

    let next_song = sq.songs[1];

    let current_song_info = await ytdl.getInfo(song.youtube_link).catch(erro => console.log("errrrr   ", erro))

    let next_song_info = null;

    if(next_song)
      next_song_info = await ytdl.getInfo(next_song.youtube_link);

    let playing_status = [`Playing **${current_song_info.title}**`];
    if (next_song_info)
      playing_status.push(`Next song **${next_song_info.title}**`);
    else {
      playing_status.push(`No more songs in the playlist`);
      sq.playlist = '';
    }

    sq.textChannel.send(`${playing_status.map(s => `${s}\n`)}`);
    sq.playing = true;

    let ytdl_option = { filter: 'audioonly' };
    let playStream_option = { type: 'opus' };


    const dispatcher = sq.connection
      .playStream(ytdl(song.youtube_link, ytdl_option), playStream_option)
      .on('end', () => {
        sq.songs.shift();
        if(sq.songs.length < 1) {
          sq.playing = false;
          sq.textChannel.send("Playlist ended!");
          return;
        }
        module.exports.play(sq, message);
      })
      .on('error', error => console.log(error));

  },
  canPlay: async (sq, message) => {
    if (!sq) {
      await message.channel.send("Please, use join first");
      return false;
    }
    if (!sq.connection) {
      await sq.textChannel.send("Your are not in a voice room");
      return false;
    }

    return true;
    
  }
};
