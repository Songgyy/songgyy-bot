const axios = require('axios');
const config = require('./../config.json');

module.exports = {
  api: axios.create({
    baseURL: 'https://gabrielpetry.com.br/songyy-api',
    headers: {
      Authorization: `Bearer ${config.api_token}`
    }
  }),
};
