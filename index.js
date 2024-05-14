const express = require("express");
const app = express();
const routes = require("./routes");
const config = require("./config");

app.use(express.json());

app.get("/:linkId", routes.handleRedirect);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
