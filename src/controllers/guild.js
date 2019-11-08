const { api } = require('../services/api');

module.exports = {
  registerGuild: async (id, name, username) => {
    let result = await api.post('/guilds', {
      id,
      name,
      username
    }).catch(err => console.log(err));
    if (!result)
      return [];

    return result.data;
  }
};
