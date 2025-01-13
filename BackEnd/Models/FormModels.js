const mongoose = require("mongoose");
const validator = require("validator");

// const FormSchema = mongoose.model('FormSchema', new mongoose.Schema({
//   name: { type: String, required: true, trim: true, minlength: 3 },
//   dob: { type: Date },
//   phone: { type: String },
//   altPhone: { type: String },
//   gender: { type: String },
//   education: { type: String },
//   email: { type: String, lowercase: true },
//   father: { type: String, trim: true },
//   fatherOccupation: { type: String },
//   mother: { type: String, trim: true },
//   motherOccupation: { type: String },
//   aadharNumber: { type: String },
//   address: { type: String },
//   state: { type: String },
//   photo: { type: String },
// }));


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
  photo: { type: String}
});

const Form = mongoose.model("Form", formSchema);
// const Form = mongoose.model("Form", FormSchema);

module.exports = Form;
