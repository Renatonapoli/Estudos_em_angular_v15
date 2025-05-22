const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "https://superheroapi.com/api/b573fd77e6c291cb8960122d5718aa4f",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  },
];

module.exports = PROXY_CONFIG;
