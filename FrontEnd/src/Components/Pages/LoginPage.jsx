// import axios from "axios";
// import { useEffect, useState } from "react";

// const LoginSignupPage = () => {
//   const POST_USER_URL = "http://localhost:4000/form/api/user";
//   const [isLogin, setIsLogin] = useState(true);
//   const [role, setRole] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [dob, setDob] = useState("");
//   const [error, setError] = useState(null);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(POST_USER_URL, {
//         name,
//         email,
//         role,
//         password,
//         confirmPassword,
//       });
//       alert("Successfully created your account");
//     } catch (err) {
//       setError(err);
//       alert(err);
//     }
//   };

//   const handleLogin =async () => {

//     try{
//       const response = await axios.get(POST_USER_URL,)
//       console.log(response)
//     }catch(err){
//       setError(err)
//       alert(err)
//     }
//   };

//   useEffect(()=>{
//     // handleLogin();
//   },[])

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>
//         <form
//           className="space-y-6"
//           onSubmit={isLogin ? handleLogin : handleSignup}
//         >
//           {/* Name Field (Only for Signup) */}
//           {!isLogin && (
//             <div className="animate-fade-in">
//               <label className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter your full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//           )}

//           {/* Role Selection (Only for Signup) */}

//           <div className="animate-fade-in">
//             <label className="block text-sm font-medium text-gray-700">
//               Role
//             </label>
//             <select
//               className=" text-gray-700 mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               // defaultValue="Student"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//             >
//               <option value="" disabled className="bg-gray-500">
//                 Select your role
//               </option>
//               <option value="student" >Student</option>
//               <option value="teacher">Teacher</option>
//             </select>
//           </div>

//           {/* Date of Birth (Only for Signup) */}
//           {!isLogin && (
//             <div className="animate-fade-in">
//               <label className="block text-sm font-medium text-gray-700">
//                 Date of Birth
//               </label>
//               <input
//                 type="date"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 value={dob}
//                 onChange={(e) => setDob(e.target.value)}
//                 required
//               />
//             </div>
//           )}

//           {/* Email Field (Common for both Login and Signup) */}
//           <div className="animate-fade-in">
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password Field (Common for both Login and Signup) */}
//           <div className="animate-fade-in">
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Confirm Password Field (Only for Signup) */}
//           {!isLogin && (
//             <div className="animate-fade-in">
//               <label className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         {/* Toggle between Login and Signup */}
//         <p className="mt-6 text-center text-sm text-gray-600">
//           {isLogin ? "Don't have an account? " : "Already have an account? "}
//           <button
//             onClick={toggleForm}
//             className="text-blue-600 hover:text-blue-500 focus:outline-none focus:underline"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupPage;

import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const LOGIN_URL = "http://localhost:4000/form/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      localStorage.setItem("token", response.data.token); // Save token
      console.log(response.data);
      // alert("Login successful!");
      navigate("/"); // Redirect to dashboard or home page
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      alert(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Link to Signup Page */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-500 focus:outline-none focus:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
