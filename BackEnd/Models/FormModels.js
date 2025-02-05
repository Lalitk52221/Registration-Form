const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide Name"],
    trim: true,
    minlength: [3, "must have a 3 character length"],
  },
  dob: { type: Date },
  phone: { type: String },
  altPhone: { type: String },
  gender: { type: String },
  education: { type: String },
  email: {
    type: String,
    // required: [true, "provide Email address"],
    lowercase: true,
    validate: [validator.isEmail, "Enter Correct Email"],
  },
  father: {
    type: String,
    trim: true,
  },
  fatherOccupation: { type: String },
  mother: { type: String, trim: true },
  motherOccupation: { type: String },
  aadharNumber: { type: String },
  address: { type: String },
  state: { type: String },
  photo: { type: String },
});

const signUpFormSchema = new mongoose.Schema({
  role: {
    type: String,
    // required:[true,"Please Provide Role"]
  },
  name: {
    type: String,
    required: [true, "please provide Name"],
    trim: true,
    minlength: [3, "must have a 3 character length"],
  },
  dob: { type: Date },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minlength: [3, "must have a 3 character length"],
  },
  confirmPassword: {
    type: String,
    // required:[true,"Please Enter Password"],
    minlength: [3, "must have a 3 character length"],
  },
});

signUpFormSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmpassword = undefined;
});

signUpFormSchema.methods.correctPassword = async function (
  candidatepassword,
  userPassword
) {
  return await bcrypt.compare(candidatepassword, userPassword);
};

const Form = mongoose.model("Form", formSchema);
const SignUpForm = mongoose.model("SignUpForm", signUpFormSchema);
// const Form = mongoose.model("Form", FormSchema);

module.exports = { Form, SignUpForm };
