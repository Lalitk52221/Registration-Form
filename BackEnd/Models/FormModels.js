// const mongoose = require("mongoose");
// const validator = require("validator");

// const formSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "please provide Name"],
//     trim: true,
//     minlength: [3, "must have a 3 character length"],
//   },
//   dob: { type: Date, required: [true, "provide Date of Birth"] },
//   phone: { type: String, required: [true, "provide Phone Number"]  },
//   altPhone: { type: String },
//   gender: { type: String, required: [true, "provide gender"] },
//   education:{type:String, required:[true,"provide Education"]},
//   email: {
//     type: String,
//     required: [true, "provide Email address"],
//     lowercase: true,
//     validate: [validator.isEmail, "Enter Correct Email"],
//   },
//   father: {
//     type: String,
//     required: [true, "provide Father Name"],
//     trim: true,
//   },
//   fatherOccupation:{type:String, required:[true,"provide Father Occupation"]},
//   mother: { type: String, required: [true, "provide Father Name"], trim: true },
//   motherOccupation:{type:String, required:[true,"provide Mother Occupation"]},
//   aadharNumber: { type: Number, required: [true, "provide Aadhar Number"] },
//   address: { type: String, required: [true, "provide Address"] },
//   state: { type: String, required: [true, "provide State"] },
//   // photo: { type: File,  },
// });

// const Form = mongoose.model("Form", formSchema);
// module.exports = Form;



const mongoose = require("mongoose");
const validator = require("validator");

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
    required: [true, "provide Email address"],
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
  // photo: { type: File,  },
});

const Form = mongoose.model("Form", formSchema);
module.exports = Form;
