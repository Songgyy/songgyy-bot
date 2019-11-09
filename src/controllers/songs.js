const { api } = require("../services/api");

module.exports = {
  getSongs: async (playlist = "", guildId = "") => {
    if (!playlist) return [];
    let result = await api.get(`/playlists/${playlist}/${guildId}`);
    if (!result) return [];
    const songs = result.data[0].songs;
    // somente pega as músicas ativas
    return songs.filter(song => song.active);
  }
};
