const User = require("../models/User");

const updateUserProfile = async(req, res) =>{
    await User.findByIdAndUpdate(req.param.id,{
        profile:"upload/"+req.file.filename
    });
    res.status(201).json({
        success:true,
        message:"User profile updated successfully"
    })
}
module.exports={
    updateUserProfile
}