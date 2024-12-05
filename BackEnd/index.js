const express = require("express")
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
const FormRouter = require("./Routers/FormRouter")

app.use("/form",FormRouter)

module.exports = app;