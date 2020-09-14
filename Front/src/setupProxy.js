const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/admin/user/list", {
      target: "http://localhost:8000/api",
      secure: false,
      changeOrigin: true,
    }),
  );
};
