// import React, { useState } from "react";
// import { useNavigate } from "react-router";

// const PersonalDetails = () => {
//   const POST_Data_URL = "http://localhost:4000/form"
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [father, setFather] = useState("");
//   const [phone, setPhone] = useState("");
//   // const [address, setAddress] = useState("");
//   const [dob,setDOB] = useState("");
//   const [gender, setGender] = useState("");
//   const [error , setError] = useState("");

// const navigate = useNavigate()

// const handleSubmit = async(e)=>{
//   e.preventDefault();
//   try{
//     const response = await fetch(POST_Data_URL,{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body:JSON.stringify({name,email, father, gender, dob}),
//     });
//     if(!response.ok){
//       const errorData = await response.json();
//       console.log(response);
//       window.alert(errorData.message|| "invalid Signup Credentials");
//       setError(errorData.message|| "invalid Signup Credentials");
//       return;
//     }
//       // const data = await response.json();
//      navigate("/all-data");
//       window.alert("Account succesffully created")

//   }catch(err){
//     console.log(err)
//   }

// }

//   return (
//     <div>
//       <p className="text-xl font-semibold mt-5 underline text-gray-400">
//         Personal Details{" "}
//       </p>
//       <form onSubmit={handleSubmit}>
//         <div className="flex text-xl flex-wrap items-center justify-start">
//           <div className="flex gap-2  m-3  flex-col">
//             <span className="">Name:</span>
//             <input
//               type="text"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex gap-2  m-3 flex-col">
//             <span className="">DOB:</span>
//             <input
//               type="date"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               value={dob}
//               onChange={(e) => setDOB(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex gap-2  m-3 flex-col">
//             <span className="">Phone No.:</span>
//             <input
//               type="tel"
//               maxLength={10}
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}

//             />
//           </div>
//           <div className="flex gap-2  m-3 flex-col">
//             <span className="">Alternative Phone No.:</span>
//             <input
//               type="tel"
//               maxLength={10}
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               // required
//             />
//           </div>
//           <div className="flex gap-2  m-3 flex-col">
//             <span className="">Gender:</span>
//             <select
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               required
//             >
//               <option value="select">select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="flex gap-2  m-3 flex-col">
//             <span className="">Email id:</span>
//             <input
//               type="email"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex gap-2 m-3 flex-col">
//             <span className="">Education:</span>
//             <input
//               type="text"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               // required
//             />
//           </div>
//           <div className="flex gap-2 m-3 flex-col">
//             <span className="">Father Name:</span>
//             <input
//               type="text"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               value={father}
//               onChange={(e) => setFather(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex gap-2 m-3 flex-col">
//             <span className="">Father Occupation:</span>
//             <input
//               type="text"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               // required
//             />
//           </div>
//           <div className="flex gap-2 m-3 flex-col">
//             <span className="">Mother Name:</span>
//             <input
//               type="text"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               // required
//             />
//           </div>
//           <div className="flex gap-2 m-3 flex-col">
//             <span className="">Mother Occupation:</span>
//             <input
//               type="text"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               // required
//             />
//           </div>
//           <div className="flex gap-2 m-3 flex-col">
//             <span className="">Aadhar Number:</span>
//             <input
//               type="number"
//               maxLength={16}
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               // required
//             />
//           </div>
//           <div className="flex gap-2 m-3 flex-col">
//             <span className="">Address:</span>
//             <input
//               type="text"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               // required
//             />
//           </div>

//           <div className="flex gap-2  m-3 flex-col">
//             <span className="">State:</span>
//             <select
//               className="border rounded-md px-3 py-1 text-lg w-64"
//               // required
//             >
//               <option value="select">select</option>
//               <option value="Andhra Pradesh">Andhra Pradesh</option>
//               <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//               <option value="Assam">Assam</option>
//               <option value="Bihar">Bihar</option>
//               <option value="Chhattisgarh">Chhattisgarh</option>
//               <option value="Goa">Goa</option>
//               <option value="Gujarat">Gujarat</option>
//               <option value="Haryana">Haryana</option>
//               <option value="Himachal Pradesh">Himachal Pradesh</option>
//               <option value="Jharkhand">Jharkhand</option>
//               <option value="Karnataka">Karnataka</option>
//               <option value="Kerala">Kerala</option>
//               <option value="Madhya Pradesh">Madhya Pradesh</option>
//               <option value="Maharashtra">Maharashtra</option>
//               <option value="Manipur">Manipur</option>
//               <option value="Meghalaya">Meghalaya</option>
//               <option value="Mizoram">Mizoram</option>
//               <option value="Nagaland">Nagaland</option>
//               <option value="Odisha">Odisha</option>
//               <option value="Punjab">Punjab</option>
//               <option value="Rajasthan">Rajasthan</option>
//               <option value="Sikkim">Sikkim</option>
//               <option value="Tamil Nadu">Tamil Nadu</option>
//               <option value="Telangana">Telangana</option>
//               <option value="Tripura">Tripura</option>
//               <option value="Uttar Pradesh">Uttar Pradesh</option>
//               <option value="Uttarakhand">Uttarakhand</option>
//               <option value="West Bengal">West Bengal</option>
//             </select>
//           </div>
//           <div className="flex gap-2 m-3 flex-col">
//             <span className="">Photo:</span>
//             <input
//               type="file"
//               className="border rounded-md px-3 py-1 text-lg w-64"
//             />
//           </div>
//         </div>
//         <button type="submit" className="m-3 bg-red-900">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PersonalDetails;
import React, { useState } from "react";
import { useNavigate } from "react-router";

const PersonalDetails = () => {
  const POST_Data_URL = "http://localhost:4000/form";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    altPhone: "",
    gender: "",
    email: "",
    education: "",
    father: "",
    fatherOccupation: "",
    mother: "",
    motherOccupation: "",
    aadharNumber: "",
    address: "",
    state: "",
    // photo: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(POST_Data_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log(response);
        window.alert(errorData.message || "Invalid Signup Credentials");
        setError(errorData.message || "Invalid Signup Credentials");
        console.log(error);
        return;
      }
      navigate("/all-data");
      window.alert("Account successfully created");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p className="text-xl font-semibold mt-5 underline text-gray-400">
        Personal Details
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex text-xl flex-wrap items-center justify-start">
          {/** Map through input fields dynamically */}
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "DOB", name: "dob", type: "date" },
            { label: "Phone No.", name: "phone", type: "tel", maxLength: 10 },
            {
              label: "Alternative Phone No.",
              name: "altPhone",
              type: "tel",
              maxLength: 10,
            },
            {
              label: "Gender",
              name: "gender",
              type: "select",
              options: ["Male", "Female", "Other"],
            },
            { label: "Email ID", name: "email", type: "email" },
            { label: "Education", name: "education", type: "text" },
            { label: "Father Name", name: "father", type: "text" },
            {
              label: "Father Occupation",
              name: "fatherOccupation",
              type: "text",
            },
            { label: "Mother", name: "mother", type: "text" },
            {
              label: "Mother Occupation",
              name: "motherOccupation",
              type: "text",
            },
            {
              label: "Aadhar Number",
              name: "aadharNumber",
              type: "number",
              maxLength: 16,
            },
            { label: "Address", name: "address", type: "text" },
            {
              label: "State",
              name: "state",
              type: "select",
              options: [
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttar Pradesh",
                "Uttarakhand",
                "West Bengal",
                "Other",
              ],
            },
            { label: "Photo", name: "photo", type: "file" },
          ].map((field, index) => (
            <div key={index} className="flex gap-2 m-3 flex-col">
              <span>{field.label}:</span>
              {field.type === "select" ? (
                <select
                  className="border rounded-md px-3 py-1 text-lg w-64"
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required={true}
                >
                  <option value="">Select</option>
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  className="border rounded-md px-3 py-1 text-lg w-64"
                  name={field.name}
                  value={
                    field.type === "file"
                      ? undefined
                      : formData[field.name] || ""
                  }
                  onChange={handleChange}
                  maxLength={field.maxLength || undefined}
                  required={field.type === "file" ? false : true}
                />
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="m-3 bg-red-900 px-4 py-2 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
