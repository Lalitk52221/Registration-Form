const express = require("express")
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const FormRouter = require("./Routers/FormRouter")

app.use("/form",FormRouter)

module.exports = app;