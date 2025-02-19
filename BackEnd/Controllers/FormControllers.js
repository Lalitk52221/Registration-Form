// const FormData = require("../Models/FormModels");
const { FormData, SignUpForm } = require("../Models/FormModels");
const xl = require("excel4node");
const fs = require("fs");
const axios = require("axios");
const path = require("path");


exports.getUserData = async (req, res) => {
  try {
    const data = await SignUpForm.find();
    if (!data) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json({
      status: "Success",
      result:data.length,
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createUserData = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const data = await SignUpForm.create(req.body);
    res.status(201).json({
      status: "Success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to create user", error: error.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await FormData.find();
    res.status(200).json({
      status: "Success",
      result: data.length,
      data: { data },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      msg: err.message,
    });
  }
};

exports.createData = async (req, res) => {
  try {
    const { name, email, photo } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        status: "failed",
        msg: "Name and email are required",
      });
    }

    if (!photo) {
      return res.status(400).json({
        status: "failed",
        msg: "Please provide a photo",
      });
    }

    const newData = await FormData.create(req.body);
    res.status(200).json({
      status: "Done",
      data: newData,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      msg: err.message,
    });
  }
};


  // exports.export = async (req, res) => {
  //   try {
  //     const students = await FormData.find().lean();
  //     const wb = new xl.Workbook();
  //     const ws = wb.addWorksheet("Students");
  
  //     // Define headers
  //     const headers = [
  //       "Name",
  //       "DOB",
  //       "Phone",
  //       "Alt Phone",
  //       "Gender",
  //       "Education",
  //       "Email",
  //       "Father",
  //       "Father Occupation",
  //       "Mother",
  //       "Mother Occupation",
  //       "Aadhar Number",
  //       "Address",
  //       "State",
  //       "Photo",
  //     ];
  //     headers.forEach((header, index) => {
  //       ws.cell(1, index + 1).string(header);
  //     });
  
  //      ws.column(15).setWidth(15); // Adjust width for image display
  //     students.forEach((_, i) => {
  //       ws.row(i + 2).setHeight(80); // Maximize row height
  //     });
  
  //     // Prepare temporary image directory
  //     const tempDir = path.join(__dirname, "temp-images");
  //     if (!fs.existsSync(tempDir)) {
  //       fs.mkdirSync(tempDir);
  //     }
  
  //     // Process student data with Promise.all
  //     await Promise.all(
  //       students.map(async (student, i) => {
  //         // Add text data
  //         ws.cell(i + 2, 1).string(student.name || "");
  //         ws.cell(i + 2, 2).string(
  //           student.dob ? student.dob.toISOString().split("T")[0] : ""
  //         );
  //         ws.cell(i + 2, 3).string(student.phone || "");
  //         ws.cell(i + 2, 4).string(student.altPhone || "");
  //         ws.cell(i + 2, 5).string(student.gender || "");
  //         ws.cell(i + 2, 6).string(student.education || "");
  //         ws.cell(i + 2, 7).string(student.email || "");
  //         ws.cell(i + 2, 8).string(student.father || "");
  //         ws.cell(i + 2, 9).string(student.fatherOccupation || "");
  //         ws.cell(i + 2, 10).string(student.mother || "");
  //         ws.cell(i + 2, 11).string(student.motherOccupation || "");
  //         ws.cell(i + 2, 12).string(student.aadharNumber || "");
  //         ws.cell(i + 2, 13).string(student.address || "");
  //         ws.cell(i + 2, 14).string(student.state || "");
  
  //         // Add photo
  //         if (student.photo) {
  //           const imagePath = path.join(tempDir, `temp-image-${i}.png`);
  //           try {
  //             const response = await axios({
  //               url: student.photo,
  //               responseType: "arraybuffer",
  //             });
  //             fs.writeFileSync(imagePath, Buffer.from(response.data, "binary"));
  
  //             // Set image dimensions
  //             const imageWidth = 150; // Width in pixels
  //             const imageHeight = 80; // Height in pixels
  
  //             ws.addImage({
  //               path: imagePath,
  //               type: "picture",
  //               position: {
  //                 type: "twoCellAnchor",
  //                 from: { col: 15, row: i + 2 },
  //                 to: {
  //                   col: 16, // Adjust based on desired width
  //                   row: i + 3, // Adjust based on desired height
  //                 },
  //               },
  //             });
  //           } catch (error) {
  //             console.error(`Error fetching image for ${student.name}:`, error);
  //           }
  //         }
  //       })
  //     );
  
  //     // Generate Excel file buffer
  //     const buffer = await wb.writeToBuffer();
  
  //     // Send response
  //     res.setHeader(
  //       "Content-Disposition",
  //       'attachment; filename="Students.xlsx"'
  //     );
  //     res.setHeader(
  //       "Content-Type",
  //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  //     );
  //     res.send(buffer);
  
  //     // Cleanup temporary images
  //     fs.rmSync(tempDir, { recursive: true, force: true });
  //   } catch (error) {
  //     console.error("Error exporting data to Excel:", error);
  //     res.status(500).send("Error exporting data to Excel");
  //   }
  // };
  
  // const xl = require("excel4node");
// const axios = require("axios");

exports.export = async (req, res) => {
  try {
    // Fetch data from the database
    const students = await FormData.find().lean();
    if (!students || students.length === 0) {
      return res.status(404).json({ status: "Failed", msg: "No data found" });
    }

    // Create a new Excel workbook and worksheet
    const wb = new xl.Workbook();
    const ws = wb.addWorksheet("Students");

    // Define headers
    const headers = [
      "Name",
      "DOB",
      "Phone",
      "Alt Phone",
      "Gender",
      "Education",
      "Email",
      "Father",
      "Father Occupation",
      "Mother",
      "Mother Occupation",
      "Aadhar Number",
      "Address",
      "State",
      "Photo",
    ];
    headers.forEach((header, index) => {
      ws.cell(1, index + 1).string(header);
    });

    // Populate worksheet rows
    await Promise.all(
      students.map(async (student, index) => {
        const rowIndex = index + 2; // Starting from the second row (1-indexed)

        // Add text fields
        ws.cell(rowIndex, 1).string(student.name || "");
        ws.cell(rowIndex, 2).string(
          student.dob ? student.dob.toISOString().split("T")[0] : ""
        );
        ws.cell(rowIndex, 3).string(student.phone || "");
        ws.cell(rowIndex, 4).string(student.altPhone || "");
        ws.cell(rowIndex, 5).string(student.gender || "");
        ws.cell(rowIndex, 6).string(student.education || "");
        ws.cell(rowIndex, 7).string(student.email || "");
        ws.cell(rowIndex, 8).string(student.father || "");
        ws.cell(rowIndex, 9).string(student.fatherOccupation || "");
        ws.cell(rowIndex, 10).string(student.mother || "");
        ws.cell(rowIndex, 11).string(student.motherOccupation || "");
        ws.cell(rowIndex, 12).string(student.aadharNumber || "");
        ws.cell(rowIndex, 13).string(student.address || "");
        ws.cell(rowIndex, 14).string(student.state || "");

        // Handle photo field
        if (student.photo) {
          try {
            const response = await axios.get(student.photo, {
              responseType: "arraybuffer",
            });

            const imageBuffer = Buffer.from(response.data, "binary");
            ws.addImage({
              image: imageBuffer,
              type: "picture",
              position: {
                type: "twoCellAnchor",
                from: { col: 15, row: rowIndex },
                to: { col: 16, row: rowIndex + 1 },
              },
            });
          } catch (error) {
            console.error(
              `Error fetching image for ${student.name}: ${error.message}`
            );
          }
        }
      })
    );

    // Write the workbook to a buffer and send it in the response
    const buffer = await wb.writeToBuffer();

    // Set response headers
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Students.xlsx"'
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    // Send the file
    res.send(buffer);
  } catch (error) {
    console.error("Export failed:", error.message);
    res.status(500).json({ status: "Failed", msg: "Error exporting data" });
  }
};
