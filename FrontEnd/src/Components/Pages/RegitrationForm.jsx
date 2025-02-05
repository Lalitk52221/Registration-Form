import React from "react";
import PersonalDetails from "../PersonalDetails";
import Address from "../Address";

const RegistrationForm = () => {
  return (
    <div className="bg-gradient-to-top max-w-screen w-screen max-h-screen p-5 text-center">
      <h1 className=" lg:text-4xl text-xl font-bold text-center py-3">
        Aakarshan <span className="text-red-500"> Skill</span> Development{" "}
        <span className="text-blue-500"> Center</span>
      </h1>
      <div
        className="text-left
       "
      >
        <h1 className="md:text-2xl text-lg font-bold">Registration Form </h1>
        <hr className="w-10 border-blue-600 border-2" />
        <PersonalDetails/>
        {/* <Address/> */}
        
      </div>
    </div>
  );
};

export default RegistrationForm;
