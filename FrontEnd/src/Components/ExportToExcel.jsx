import axios from "axios";

const ExportToExcel = () => {

    //   const Data_URL = "https://registration-form-07ol.onrender.com/form/export";
      const Data_URL = "http://localhost:4000/form/export";

   // Function to trigger the export
   const handleExport = async () => {
    try {
      // Send a GET request to the backend export endpoint
      const response = await axios.get(Data_URL, {
        responseType: "blob", // Ensure the response is treated as a binary file
      });

      // Create a URL for the Excel file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");

      // Set the file name and URL
      link.href = url;
      link.setAttribute("download", "users_data.xlsx"); // File name to download
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Cleanup
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error exporting data:", error);
      alert("Failed to export data. Please try again later.");
    }
  };

  return (
    <button
      onClick={handleExport}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Export to Excel
    </button>
  );
};

export default ExportToExcel