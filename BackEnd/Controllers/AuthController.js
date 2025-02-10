const jwt = require("jsonwebtoken");
const { SignUpForm } = require("../Models/FormModels");

exports.signUp = async (req, res, next) => {
  try {
    const newUser = await SignUpForm.create(req.body);
    const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_JWT, {
      expiresIn: process.env.TOKEN_EXP,
    });
    res.status(200).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  // 1. Check email and password and print error
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
    return;
  }
  //2. check user is exist or password is correct
  const user = await SignUpForm.findOne({ email }).select("+password");
  console.log(user);

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(400).json({
      status: "fail",
      message: "wrong email and password",
    });
    return;
  }

  // *3.  if everything is okay then send tokens

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjU4OTQyYTQzNTNhMjhkMTBmZGE5NSIsImlhdCI6MTcyNzM2NzQ5MCwiZXhwIjoxNzI3NTQwMjkwfQ.E05-YPD-q2wDOyiWnfRkKvDXeo54JvSydO8qn3t0lVk";
  const token = jwt.sign({ id: user._id }, process.env.TOKEN_JWT, {
    expiresIn: process.env.TOKEN_EXP,
  });
  console.log(token);
  res.status(200).json({
    status: "OK",
    token: token,
    user: user,
  });
};
