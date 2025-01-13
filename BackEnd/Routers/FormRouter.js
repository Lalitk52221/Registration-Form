const express = require("express");
const FormControllers = require("../Controllers/FormControllers");


const router = express.Router();
router
  .route("/")
  .post(FormControllers.createData)
  .get(FormControllers.getData)

  router.get("/export",FormControllers.export)

module.exports = router;
