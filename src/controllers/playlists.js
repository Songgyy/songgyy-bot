const { api } = require("../services/api");

module.exports = {
  getPlaylists: async guild_id => {
    let result = await api
      .get("/playlists", { params: { guild_id } })
      .catch(err => console.log(err));
    if (!result) return [];
    console.log(guild_id);
    return result.data.playlists;
  }
};
