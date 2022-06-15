const PORT = process.env.PORT || 8080;
const app = require("./app");

const init = () => {
  try {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (e) {}
};

init();
