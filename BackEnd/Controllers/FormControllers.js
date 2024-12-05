const FormData = require("../Models/FormModels");
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
      msg: err,
    });
  }
};

exports.createData = async (req,res)=>{
    try{
        const newData = await FormData.create(req.body);
        res.status(200).json({
            status:"Done",
            data:newData
        })
    }catch(err){
        res.status(400).json({
            status:"failed",
            // msg:err,    
          msg:"data not created"
        })
    }
};
