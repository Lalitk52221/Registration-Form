const FormData = require("../Models/FormModels");
// const express = require("express");
// const multer = require("multer")

// const upload = multer({dest:"uploads/"})

exports.getData = async (req, res) => {
  try {
    const data = await FormData.find();
    res.status(200).json({
      status: "Success",
      result: data.length,
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      msg: err.message,
    });
  }
};

exports.createData = async (req,res)=>{
    try{

      const {name,email} = req.body;
      if(!name || !email){
        return res.status(400).json({
          status:"failed",
          msg:"Name and email are required",
        })
      }

      // const photo = req.file;
      // if(!photo){
      //   return res.status(400).json({
      //     status:"failed",
      //     msg:"please provide a photo",
      //   })
      // }
        const newData = await FormData.create(req.body);
        res.status(200).json({
            status:"Done",
            data:newData
        })
    }catch(err){
        res.status(400).json({
            status:"failed",  
          msg:err.message
        })
    }
};
