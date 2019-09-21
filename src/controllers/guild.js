const { api } = require('../services/api');

module.exports = {
  registerGuild: async (id, name) => {
    let result = await api.post('/guilds', {
      id,
      name
    }).catch(err => console.log(err));
    if (!result)
      return [];

    return result.data;
  }
};
