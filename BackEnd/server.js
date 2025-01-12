const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./index.js");
// console.log(process.env.NODE_ENV);
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB Connetion Error:", err);
  });

PORT_NO = process.env.PORT || 4000;

app.listen(PORT_NO, "0.0.0.0", () => {
  console.log("Server has started on Port number ", PORT_NO);
});
