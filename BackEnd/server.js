const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./index.js");
// console.log(process.env.NODE_ENV);
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds
})
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
