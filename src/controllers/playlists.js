const { api } = require("../services/api");

module.exports = {
  getPlaylists: async () => {
    let result = await api
      .get("/playlists/songs")
      .catch(err => console.log(err));
    if (!result) return [];
    return result.data.playlists;
  }
};
