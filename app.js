const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(morgan());
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Api ok!" });
});

(async () => {
  try {
    const httpsServer = app;
    httpsServer.listen(5000, () => console.log("Service is live!"));
  } catch (err) {
    console.log(err);
  }
})();
