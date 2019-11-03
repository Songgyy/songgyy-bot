const { api } = require("../services/api");

module.exports = {
  getSongs: async (playlist = "") => {
    if (!playlist) return [];
    let result = await api.get(`/songs/${playlist}`);
    if (!result) return [];
    return result.data.songs;
  }
};
