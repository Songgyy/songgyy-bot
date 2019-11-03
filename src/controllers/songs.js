const { api } = require("../services/api");

module.exports = {
  getSongs: async (playlist = "") => {
    if (!playlist) return [];
    let result = await api.get(`/playlists/${playlist}`);
    if (!result) return [];
    return result.data[0].songs;
  }
};
