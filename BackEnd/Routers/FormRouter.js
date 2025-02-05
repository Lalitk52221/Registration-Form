const express = require("express");
const FormControllers = require("../Controllers/FormControllers");
const authcontroller = require("../Controllers/AuthController")

const router = express.Router();

// Routes for general form data
router.route("/")
  .post(FormControllers.createData)  // For general form creation
  .get(FormControllers.getData);     // Fetch form data

// Routes for user-specific signup
router.post("/api/user", FormControllers.createUserData);
router.get("/api/user", FormControllers.getUserData);

// Routes for User Authentication 
router.post("/signup",authcontroller.signUp)
router.post("/login",authcontroller.login)

// Route to export data
router.get("/export", FormControllers.export);


module.exports = router;
