import { useEffect, useState } from "react";
import format from "date-fns/format";
import axios from "axios";
import ExportToExcel from "./ExportToExcel";
import { SceletonAllData } from "./UI/Sceleton";

const AllData = () => {
  const Data_URL = "https://registration-form-07ol.onrender.com/form";
  // const Data_URL = "http://localhost:4000/form";

  const [fetchData, setFetchData] = useState([]);
  

  // const fetchFormData = async () => {
  //   try {
  //     const response = await fetch(Data_URL, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     setFetchData(data.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const fetchFormData=async ()=>{
    try{
      const {data} = await axios.get(Data_URL);
      console.log(data)
      setFetchData(data.data.data);
    }catch(err){
      console.log("error is ", err)
    }
  }

  useEffect(() => {
    fetchFormData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold my-4 text-center">All Data</h2>
      {/* Responsive Table */}
        <ExportToExcel/>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200 text-sm text-black">
              <th className="border border-gray-400 px-2 py-1">S.No</th>
              <th className="border border-gray-400 px-2 py-1">Name</th>
              <th className="border border-gray-400 px-2 py-1">DOB</th>
              <th className="border border-gray-400 px-2 py-1">Phone</th>
              <th className="border border-gray-400 px-2 py-1">Alt Phone</th>
              <th className="border border-gray-400 px-2 py-1">Gender</th>
              <th className="border border-gray-400 px-2 py-1">Email</th>
              <th className="border border-gray-400 px-2 py-1">Education</th>
              <th className="border border-gray-400 px-2 py-1">Father</th>
              <th className="border border-gray-400 px-2 py-1">Father Occupation</th>
              <th className="border border-gray-400 px-2 py-1">Mother</th>
              <th className="border border-gray-400 px-2 py-1">Mother Occupation</th>
              <th className="border border-gray-400 px-2 py-1">Aadhar</th>
              <th className="border border-gray-400 px-2 py-1">Address</th>
              <th className="border border-gray-400 px-2 py-1">State</th>
              <th className="border border-gray-400 px-2 py-1">Photo</th>
            </tr>
          </thead>
          <tbody>
            {fetchData? fetchData.map((data,index) => (
              <tr key={data._id} className="text-sm text-center">
                <td className="border border-gray-400 px-2 py-1">{index+1}</td>
                <td className="border border-gray-400 px-2 py-1">{data.name}</td>
                <td className="border border-gray-400 px-2 py-1 whitespace-nowrap">{format(data.dob,"dd MMM yyyy")}</td>
                <td className="border border-gray-400 px-2 py-1">{data.phone}</td>
                <td className="border border-gray-400 px-2 py-1">{data.altPhone || "N/A"}</td>
                <td className="border border-gray-400 px-2 py-1">{data.gender}</td>
                <td className="border border-gray-400 px-2 py-1">{data.email}</td>
                <td className="border border-gray-400 px-2 py-1">{data.education}</td>
                <td className="border border-gray-400 px-2 py-1">{data.father}</td>
                <td className="border border-gray-400 px-2 py-1">{data.fatherOccupation}</td>
                <td className="border border-gray-400 px-2 py-1">{data.mother}</td>
                <td className="border border-gray-400 px-2 py-1">{data.motherOccupation}</td>
                <td className="border border-gray-400 px-2 py-1">{data.aadharNumber}</td>
                <td className="border border-gray-400 px-2 py-1">{data.address}</td>
                <td className="border border-gray-400 px-2 py-1">{data.state}</td>
                <td className="border border-gray-400 px-2 py-1">
                  <img src={data.photo} alt="user photo" className="w-16 h-16 object-cover" />
                </td>
              </tr>
            )):
            <SceletonAllData/>
            }
            
          </tbody>
        </table>
        <SceletonAllData/>
      </div>
    </div>
  );
};

export default AllData;
