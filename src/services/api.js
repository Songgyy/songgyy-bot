const axios = require("axios");
const config = require("./../config.json");

module.exports = {
  api: axios.create({
    // baseURL: 'https://gabrielpetry.com.br/v2/',
    baseURL: "http://localhost:3000/",
    headers: {
      Authorization: `Bearer ${config.api_token}`
    }
  })
};
