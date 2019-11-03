const axios = require("axios");
const config = require("./../config.json");

module.exports = {
  api: axios.create({
    baseURL: "http://gabrielpetry.com.br:21142",
    headers: {
      Authorization: `Bearer ${config.api_token}`
    }
  })
};
