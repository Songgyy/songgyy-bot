const { api } = require("../services/api");

module.exports = {
  getPlaylists: async () => {
    let result = await api.get("/playlists").catch(err => console.log(err));
    if (!result) return [];
    console.log(result.data);
    return result.data.playlists;
  }
};
