const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    if (!url) throw new Error(`Invalid url`);

    const { data } = await axios.get(url);
    return data;

    // const resp = await fetch(url);
    // const data = await resp.json();
    // return data;
  },
  post: async () => {},
  put: () => {},
  delete: () => {},
};

module.exports = {
  http: httpClientPlugin,
};
