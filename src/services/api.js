const axios = require("axios");
const config = require("./../config.json");

module.exports = {
  api: axios.create({
    baseURL: 'https://gabrielpetry.com.br/v2/',
    // baseURL: "http://172.18.0.1:3333/",
    headers: {
      Authorization: `Bearer ${config.api_token}`
    }
  })
};
